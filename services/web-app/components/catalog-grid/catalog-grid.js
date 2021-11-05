/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import styles from './catalog-grid.module.scss'
import {
  Svg12Stable,
  Svg14Download,
  Svg14License,
  Svg16Carbon
} from '@/icons/index.js'
import { Add16 } from '@carbon/icons-react'

const CatalogGrid = () => {
  return (
    <div className={styles.container}>
      <article className={styles.item}>
        <div className={styles.itemImage}>
          <Add16 aria-label="Add" className="my-custom-class" />
        </div>
        <div className={styles.itemContent}>
          <p className={styles.itemSponsor}>
            {'Super Sponsor'}
          </p>
          <header className={styles.itemName}>{'The best componenet ever'}</header>
          <footer className={styles.itemInfo}>
            <Svg14Download className={styles.itemDownloadsIcon} />
            <div className={styles.itemDownloads}>{'1,234'}</div>
            <Svg14License className={styles.itemLicenseIcon} />
            <div className={styles.itemLicense}>{'Apache 2.0'}</div>
            <Svg16Carbon className={styles.itemReviewedIcon} />
            <div className={styles.itemReviewed}>{'Reviewed'}</div>
          </footer>
          <div className={styles.itemStatus}>
            <Svg12Stable className={styles.itemStatusIcon} />
            {'Stable'}
          </div>
        </div>
      </article>
      <article className={styles.item}>
        <div className={styles.itemImage}>
          <Add16 aria-label="Add" className="my-custom-class" />
        </div>
        <div className={styles.itemContent}>
          <p className={styles.itemSponsor}>
            {'Super Sponsor'}
          </p>
          <header className={styles.itemName}>{'The best cever'}</header>
          <footer className={styles.itemInfo}>
            <Svg14Download className={styles.itemDownloadsIcon} />
            <div className={styles.itemDownloads}>{'1,234'}</div>
            <Svg14License className={styles.itemLicenseIcon} />
            <div className={styles.itemLicense}>{'Apache 2.0'}</div>
            <Svg16Carbon className={styles.itemReviewedIcon} />
            <div className={styles.itemReviewed}>{'Reviewed'}</div>
          </footer>
          <div className={styles.itemStatus}>
            <Svg12Stable className={styles.itemStatusIcon} />
            {'Stable'}
          </div>
        </div>
      </article>
      <article className={styles.item}>
        <div className={styles.itemImage}>
          <Add16 aria-label="Add" className="my-custom-class" />
        </div>
        <div className={styles.itemContent}>
          <p className={styles.itemSponsor}>
            {'Super Sponsor'}
          </p>
          <header className={styles.itemName}>{'The best cever'}</header>
          <footer className={styles.itemInfo}>
            <Svg14Download className={styles.itemDownloadsIcon} />
            <div className={styles.itemDownloads}>{'1,234'}</div>
            <Svg14License className={styles.itemLicenseIcon} />
            <div className={styles.itemLicense}>{'Apache 2.0'}</div>
            <Svg16Carbon className={styles.itemReviewedIcon} />
            <div className={styles.itemReviewed}>{'Reviewed'}</div>
          </footer>
          <div className={styles.itemStatus}>
            <Svg12Stable className={styles.itemStatusIcon} />
            {'Stable'}
          </div>
        </div>
      </article>
    </div>
  )
}

export default CatalogGrid
