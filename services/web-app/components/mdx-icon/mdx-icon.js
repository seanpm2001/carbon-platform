/*
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Bee, LogoGithub } from '@carbon/icons-react'
import {
  Codepen,
  Codesandbox,
  Figma,
  Illustrator,
  Js,
  Medium,
  Npm,
  Sketch,
  Storybook,
  Svelte,
  Vue,
  Zenhub
} from '@carbon-platform/icons'
import clsx from 'clsx'
import Image from 'next/image'
import PropTypes from 'prop-types'

import angular from './icons/angular.png'
import ase from './icons/ase.png'
import codepen from './icons/codepen.png'
import react from './icons/react.png'
import sass from './icons/sass.png'
import vue from './icons/vue.png'
import webcomponents from './icons/webcomponents.png'
import styles from './mdx-icon.module.scss'

const svgIcons = {
  sketch: Sketch,
  codesandbox: Codesandbox,
  illustrator: Illustrator,
  codepen: Codepen,
  storybook: Storybook,
  medium: Medium,
  npm: Npm,
  figma: Figma,
  zenhub: Zenhub,
  vue: Vue,
  svelte: Svelte,
  js: Js
}

const localIcons = {
  ase,
  react,
  vue,
  angular,
  webcomponents,
  sass,
  codepen
}

const carbonIcons = {
  github: LogoGithub,
  bee: Bee
}

const iconColor = {
  inverse: 'icon-inverse'
}

const MdxIcon = ({ name, color, fill }) => {
  if (svgIcons[name]) {
    const SvgComponent = svgIcons[name]
    return (
      <div className={styles['mdx-icon']}>
        <SvgComponent style={{ fill }} />
      </div>
    )
  }

  if (localIcons[name]) {
    return (
      <div className={styles['mdx-icon']}>
        <Image alt={`${name} icon`} src={localIcons[name]} />
      </div>
    )
  }

  if (carbonIcons[name]) {
    const Icon = carbonIcons[name]
    return (
      <Icon
        className={clsx(styles['mdx-icon'], styles[iconColor[color]])}
        size={32}
        style={{ fill }}
      />
    )
  }

  return null
}

const acceptedCompNames = [
  ...Object.keys(localIcons),
  ...Object.keys(carbonIcons),
  ...Object.keys(svgIcons)
]

MdxIcon.propTypes = {
  /**
   * Optional: can supply color "icon-inverse" for carbonIcons.
   */
  color: PropTypes.oneOf(Object.keys(iconColor)),
  /**
   * Optional: color to fill icon.
   */
  fill: PropTypes.string,
  /**
   * Name of Icon to render.
   */
  name: PropTypes.oneOf(acceptedCompNames).isRequired
}

export { acceptedCompNames, MdxIcon as default }
