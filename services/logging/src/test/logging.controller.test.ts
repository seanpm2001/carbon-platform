/*
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LogLoggedMessage } from '@carbon-platform/api/logging'

import { LogDnaService } from '../main/log-dna.service'
import { LoggingController } from '../main/logging.controller'

test('logLogged runs without crashing', async () => {
  const logDnaService = new LogDnaService()
  const loggingController = new LoggingController(logDnaService)

  const data: LogLoggedMessage = {
    component: 'test',
    environment: 'test',
    level: 'debug',
    message: 'test message',
    service: 'test service',
    timestamp: Date.now()
  }

  await expect(loggingController.logLogged(data)).resolves.not.toThrow()
})

describe('message validation', () => {
  let logDnaService: LogDnaService
  let loggingController: LoggingController
  let data: LogLoggedMessage

  beforeEach(() => {
    logDnaService = new LogDnaService()
    loggingController = new LoggingController(logDnaService)
    ;(loggingController as any).nestLogger = {
      warn: jest.fn()
    }

    data = {
      component: 'test',
      environment: 'test',
      level: 'debug',
      message: 'test message',
      service: 'test service',
      timestamp: Date.now()
    }
  })

  it('logs a warning when no component specified', async () => {
    delete (data as any).component
    loggingController.logLogged(data)
    expect(loggingController.nestLogger.warn).toHaveBeenCalled()
  })

  it('logs a warning when no environment specified', async () => {
    delete (data as any).environment
    loggingController.logLogged(data)
    expect(loggingController.nestLogger.warn).toHaveBeenCalled()
  })

  it('logs a warning when no level specified', async () => {
    delete (data as any).level
    loggingController.logLogged(data)
    expect(loggingController.nestLogger.warn).toHaveBeenCalled()
  })

  it('logs a warning when no message specified', async () => {
    delete (data as any).message
    loggingController.logLogged(data)
    expect(loggingController.nestLogger.warn).toHaveBeenCalled()
  })

  it('logs a warning when no service specified', async () => {
    delete (data as any).service
    loggingController.logLogged(data)
    expect(loggingController.nestLogger.warn).toHaveBeenCalled()
  })

  it('logs a warning when no timestamp specified', async () => {
    delete (data as any).timestamp
    loggingController.logLogged(data)
    expect(loggingController.nestLogger.warn).toHaveBeenCalled()
  })
})
