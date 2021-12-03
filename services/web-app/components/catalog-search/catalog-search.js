/*
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Column, Grid, Layer, MultiSelect, Search, Theme } from '@carbon/react'

import { mediaQueries, useMatchMedia } from '@/utils/use-match-media'

import styles from './catalog-search.module.scss'

const CatalogSearch = ({ search = '', onSearch }) => {
  const isMd = useMatchMedia(mediaQueries.md)

  const handleOnChange = (event) => {
    onSearch(event.target.value)
  }

  const handleOnClear = () => {
    onSearch('')
  }

  const items = [
    { id: 'one', text: 'One' },
    { id: 'two', text: 'Two' },
    { id: 'three', text: 'Three' }
  ]

  return (
    <Theme className={styles.container} theme="white">
      <Layer>
        <Grid condensed={!isMd} narrow={isMd}>
          <Column className={styles.column} sm={2} md={4} lg={8}>
            <Search
              id="catalog-search"
              labelText="Search component index by name, keyword, or domain"
              placeholder="Component name, keyword, domain"
              value={search}
              onChange={handleOnChange}
              onClear={handleOnClear}
              size="lg"
            />
          </Column>
          <Column className={styles.column} sm={2} md={4} lg={4}>
            <MultiSelect
              id="catalog-filter"
              label="Filters"
              items={items}
              itemToString={(item) => (item ? item.text : '')}
              initialSelectedItems={[items[0], items[1]]}
              size="lg"
            />
          </Column>
        </Grid>
      </Layer>
    </Theme>
  )
}

export default CatalogSearch
