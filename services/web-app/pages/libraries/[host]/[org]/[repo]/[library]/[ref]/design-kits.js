/*
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Column, Grid, Link as CarbonLink, Tag } from '@carbon/react'
import { RulerAlt } from '@carbon/react/icons'
import { AnchorLink, AnchorLinks } from '@carbon-platform/mdx-components'
import { get, groupBy } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useContext, useEffect } from 'react'

import CardGroup from '@/components/card-group/card-group'
import H1 from '@/components/markdown/h1'
import H2 from '@/components/markdown/h2'
import P from '@/components/markdown/p'
import MdxIcon from '@/components/mdx-icon/mdx-icon'
import PageDescription from '@/components/page-description/page-description'
import PageHeader from '@/components/page-header'
import ResourceCard from '@/components/resource-card/resource-card'
import { designKitTypes } from '@/data/design-kit-types'
import { designTools } from '@/data/design-tools'
import { assetsNavData } from '@/data/nav-data'
import { pageHeaders } from '@/data/page-headers'
import { LayoutContext } from '@/layouts/layout'
import { getLibraryData, getLibraryNavData } from '@/lib/github'

import pageStyles from '../../../../../../pages.module.scss'

const DesignKits = ({ libraryData, navData }) => {
  const { setPrimaryNavData, setSecondaryNavData } = useContext(LayoutContext)
  const router = useRouter()

  const pageHeader = pageHeaders?.library ?? {}

  const { name, designKits } = libraryData.content

  const groupedDesignKits = Object.entries(
    groupBy(
      Object.entries(designKits).map((key) => ({ ...key[1] })),
      (kit) => kit.tool
    )
  )

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

  const noDesignKits = (
    <>
      <PageDescription>This library contains no compatible design kits.</PageDescription>
      <P>
        It looks like there are no design kits compatible with this library. Explore the design kit
        catalog to find more design kits or contact libray maintainers.
      </P>
      <CardGroup>
        <Column lg={4} md={4}>
          <ResourceCard subTitle="Design kit catalog" href="/design-kits">
            <RulerAlt size={32} />
          </ResourceCard>
        </Column>
      </CardGroup>
    </>
  )

  return (
    <>
      <NextSeo {...seo} />
      <PageHeader bgColor={pageHeader?.bgColor} title="Design kits" pictogram={pageHeader?.icon} />
      <Grid>
        <Column sm={4} md={8} lg={12}>
          <div className={pageStyles.content}>
            {!designKits && noDesignKits}
            {designKits && (
              <>
                <PageDescription>
                  The following design kits are compatible with the {name} library. If you are new
                  to Carbon, check out the{' '}
                  <Link href="/designing/get-started" passHref>
                    <CarbonLink>design guidance</CarbonLink>
                  </Link>{' '}
                  to get started. You can also view all design kits in the{' '}
                  <Link href="/design-kits" passHref>
                    <CarbonLink>catalog</CarbonLink>
                  </Link>
                  .
                </PageDescription>
                <AnchorLinks>
                  {groupedDesignKits.map((kit, i) => (
                    <AnchorLink key={i}>{get(designTools, `[${kit[0]}].name`)}</AnchorLink>
                  ))}
                </AnchorLinks>
                {groupedDesignKits.map((kit, i) => (
                  <div key={i}>
                    <H2>{get(designTools, `[${kit[0]}].name`)}</H2>
                    <CardGroup>
                      {kit[1].map((item, i) => (
                        <Column lg={4} md={4} key={i}>
                          <ResourceCard
                            subTitle={item.name}
                            href={item.url}
                            component={
                              <Tag type={get(designKitTypes, `[${item.type}].tagType`)}>
                                {get(designKitTypes, `[${item.type}].name`)}
                              </Tag>
                            }
                          >
                            <MdxIcon name={get(designTools, `[${item.tool}].icon`)} />
                          </ResourceCard>
                        </Column>
                      ))}
                    </CardGroup>
                  </div>
                ))}
              </>
            )}
          </div>
        </Column>
      </Grid>
    </>
  )
}

export const getServerSideProps = async ({ params }) => {
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
    }
  }
}

export default DesignKits
