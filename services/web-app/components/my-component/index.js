/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Column, Grid, Pagination } from '@carbon/react'

import ComponentCatalogItem from './ComponentCatalogItem'
import ComponentCatalogItemGrid from './ComponentCatalogItemGrid'
import ComponentCatalogSearch from './ComponentCatalogSearch'
import ComponentCatalogSort from './ComponentCatalogSort'
import styles from './my-component.module.scss'

const ComponentCatalogIndexPage = () => {
  return (
    <Grid>
      <Column xl={16} lg={16} md={8} sm={4} className={styles.componentCatalogIndexContainer}>
        <ComponentCatalogSearch />
        <ComponentCatalogSort />
        <ComponentCatalogItem />
        <ComponentCatalogItemGrid />
        <Pagination
          className={styles.componentCatalogPaginationContainer}
          backwardText="Previous page"
          forwardText="Next page"
          itemsPerPageText="Items per page:"
          page={1}
          pageNumberText="Page Number"
          pageSize={10}
          pageSizes={[10, 20, 30, 40, 50]}
          totalItems={103}
        />
      </Column>
    </Grid>
  )
}

export default ComponentCatalogIndexPage
