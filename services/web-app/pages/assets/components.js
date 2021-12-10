/*
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { NextSeo } from 'next-seo'
import { useContext, useEffect } from 'react'

import Catalog from '@/components/catalog'
import { assetsNavData } from '@/data/nav-data'
import { LayoutContext } from '@/layouts/layout'
import { getAllLibraries } from '@/lib/github'

const Components = ({ librariesData }) => {
  const { setNavData } = useContext(LayoutContext)

  const seo = {
    title: 'Components'
  }

  useEffect(() => {
    setNavData(assetsNavData)
  }, [setNavData])

  return (
    <>
      <NextSeo {...seo} />
      <Catalog data={librariesData} type="component" />
    </>
  )
}

export const getStaticProps = async () => {
  const librariesData = await getAllLibraries()

  return {
    props: {
      librariesData
    }
  }
}

export default Components
