/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext, useEffect } from 'react'

import { LayoutContext } from '@/layouts/layout'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { assetsNavData } from '@/data/nav-data'
import { getLibraryData } from '@/lib/github'
import slugify from 'slugify'
import styles from '@/pages/pages.module.scss'
import { useRouter } from 'next/router'

const Library = ({ libraryData, params }) => {
  const { setNavData } = useContext(LayoutContext)
  const router = useRouter()

  useEffect(() => {
    setNavData(assetsNavData)
  }, [setNavData])

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  const { name, description } = libraryData.content

  const seo = {
    title: name,
    description
  }

  const assets = libraryData.assets.sort((a, b) =>
    a.content.name > b.content.name ? 1 : b.content.name > a.content.name ? -1 : 0
  )

  return (
    <>
      <NextSeo {...seo} />
      <ul>
        {assets.map((asset, i) => (
          <li key={i}>
            <Link
              href={`/assets/${asset.params.slug}/${params.ref}/${slugify(asset.content.name, {
                lower: true
              })}`}
            >
              <a>{asset.content.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <pre className={styles.data}>{JSON.stringify(libraryData, null, 2)}</pre>
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

  return {
    props: {
      libraryData,
      params
    },
    revalidate: 10
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export default Library
