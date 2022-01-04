/*
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
const { Command } = require('commander')

const { getPackageByName, execWithOutput } = require('./utils')

const REMOTE_REGISTRY = 'us.icr.io/carbon-platform'
const LOCAL_REGISTRY = 'local/carbon-platform'
const ENVVAR_PREFIX = 'CARBON_'

function buildDockerCommand() {
  return new Command('docker')
    .description('Management of docker images')
    .option('--build', 'Build docker image for provided service name')
    .option('--omit-base', 'Skip building a base image as the first step')
    .option('--push', 'Push built docker image to container registry')
    .argument('<service-name>', 'Name of the service on which to operate')
    .action(handleDockerCommand)
}

async function handleDockerCommand(serviceName, opts) {
  console.log('===== micromanage docker =====')

  const service = getPackageByName(serviceName)

  if (!service) {
    throw new Error('Unknown service: ' + serviceName)
  }

  if (!opts.omitBase) {
    await buildBaseImage()
  }

  // Ensure only services are built/pushed
  if (!service.path.startsWith('services/')) {
    console.log(`Skipping non-service: ${serviceName}`)
    return
  }

  const suffix = service.name.split('/').pop()
  const imageName = `${REMOTE_REGISTRY}/${suffix}:${service.version}`

  console.log(`Determined image name to be ${imageName}`)

  if (opts.build) {
    await buildService(imageName, service.path)
  }

  if (opts.push) {
    await pushService(imageName)
  }
}

async function buildBaseImage() {
  console.log('Building base image')

  await execWithOutput(`docker build --pull --tag ${LOCAL_REGISTRY}/base:latest .`)
}

async function buildService(imageName, contextDir) {
  console.log(`Building image: ${imageName}`)

  const buildArgs = getEnvvarNames().map((envvarName) => `--build-arg ${envvarName}`)
  const buildArgsStr = buildArgs.join(' ')

  await execWithOutput(`docker build --tag ${imageName} ${buildArgsStr} ${contextDir}`)
}

function getEnvvarNames() {
  return Object.keys(process.env).filter((varname) => varname.startsWith(ENVVAR_PREFIX))
}

async function pushService(imageName) {
  console.log(`Pushing image: ${imageName}`)

  await execWithOutput(`docker push ${imageName}`)
}

module.exports = {
  buildDockerCommand
}
