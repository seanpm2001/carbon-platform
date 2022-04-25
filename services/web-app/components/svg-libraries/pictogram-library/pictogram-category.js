/*
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import clsx from 'clsx'
import React from 'react'

import { h2 } from '@/components/markdown/markdown.module.scss'
import useIntersectionObserver from '@/utils/use-intersection-observer'

import SvgCard from '../svg-card'
import {
  categoryTitle,
  pictograms as pictogramList,
  svgCategory,
  svgGrid
} from '../svg-library.module.scss'

const PictogramCategory = ({ category, pictograms, columnCount }) => {
  const [sectionRef, containerIsVisible] = useIntersectionObserver()

  return (
    <section ref={sectionRef} className={svgCategory}>
      <h2 className={clsx(h2, categoryTitle)}>{category}</h2>
      <ul className={clsx(svgGrid, pictogramList)}>
        {pictograms
          .filter((pictogram) => {
            return !(pictogram.name === 'ibm--z' || pictogram.name === 'ibm--z--partition')
          })
          .map((pictogram, i) => (
            <SvgCard
              isLastCard={(i + 1) % columnCount === 0}
              containerIsVisible={containerIsVisible}
              key={pictogram.name}
              icon={pictogram}
              height="23.5%"
              width="23.5%"
            />
          ))}
      </ul>
    </section>
  )
}

export default PictogramCategory
