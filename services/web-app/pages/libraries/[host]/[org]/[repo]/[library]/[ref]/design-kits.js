/*
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Column, Grid } from '@carbon/react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useContext, useEffect } from 'react'

import H1 from '@/components/markdown/h1'
import PageHeader from '@/components/page-header'
import { assetsNavData } from '@/data/nav-data'
import { pageHeaders } from '@/data/page-headers'
import { LayoutContext } from '@/layouts/layout'
import { getLibraryData, getLibraryNavData } from '@/lib/github'

import pageStyles from '../../../../../../pages.module.scss'

const DesignKits = ({ libraryData, navData }) => {
  const { setPrimaryNavData, setSecondaryNavData } = useContext(LayoutContext)
  const router = useRouter()

  const pageHeader = pageHeaders?.library ?? {}

  const { name } = libraryData.content

  const seo = {
    title: `${name} design kits`
  }

  useEffect(() => {
    setPrimaryNavData(assetsNavData)
    setSecondaryNavData(navData)
  }, [setPrimaryNavData, navData, setSecondaryNavData])

  if (router.isFallback) {
    return (
      <Grid>
        <Column sm={4} md={8} lg={16}>
          <div className={pageStyles.content}>
            <H1>Loading...</H1>
          </div>
        </Column>
      </Grid>
    )
  }

  return (
    <>
      <NextSeo {...seo} />
      <PageHeader bgColor={pageHeader?.bgColor} title="Design kits" pictogram={pageHeader?.icon} />
      <Grid>
        <Column sm={4} md={8} lg={12}>
          <div className={pageStyles.content}>Coming soon!</div>
        </Column>
      </Grid>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const libraryData = await getLibraryData(params)

  if (!libraryData) {
    return {
      notFound: true
    }
  }

  const navData = getLibraryNavData(params, libraryData)

  return {
    props: {
      libraryData,
      navData,
      params
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every hour
    revalidate: 60 * 60 // In seconds
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default DesignKits
