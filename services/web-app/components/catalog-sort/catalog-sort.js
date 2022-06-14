/*
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Column, Dropdown, Grid, IconButton } from '@carbon/react'
import { Grid as GridIcon, List as ListIcon } from '@carbon/react/icons'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useCallback, useEffect, useRef, useState } from 'react'

import { GRID_VIEW, LIST_VIEW } from '@/data/view'
import useEventListener from '@/utils/use-event-listener'

import styles from './catalog-sort.module.scss'

const CatalogSort = ({
  onSort,
  onView,
  sort,
  view,
  sortOptions,
  defaultSortIndex = 0,
  allowMultiView = true
}) => {
  const containerRef = useRef(null)
  const [isSticky, setIsSticky] = useState(false)

  // Conditionally add a drop shadow through JavaScript because `position:sticky` doesn't support a
  // `::stuck` pseudo-class to trigger the drop shadow. Header (48) + spacer (16) + search (48) =
  // 112.
  const scrollHandler = useCallback(() => {
    if (containerRef.current && typeof window !== 'undefined') {
      setIsSticky(containerRef.current.getBoundingClientRect().top === 112)
    }
  }, [])

  useEventListener('scroll', scrollHandler)
  useEffect(() => {
    scrollHandler()
  }, [scrollHandler])

  return (
    <div
      className={clsx(styles.container, isSticky && styles['container--sticky'])}
      ref={containerRef}
    >
      <Grid className={styles.grid} narrow>
        <Column className={styles.column} sm={4} md={8} lg={4}>
          <Dropdown
            id="catalog-sort"
            className={styles.dropdown}
            initialSelectedItem={sortOptions.find((item) => item.id === sort)}
            items={sortOptions}
            itemToString={(item) => (item ? item.text : '')}
            onChange={({ selectedItem }) => {
              onSort(selectedItem.id)
            }}
            type="inline"
            titleText="Sort by:"
            label={sortOptions[defaultSortIndex].text}
            size="lg"
          />
        </Column>
        <Column className={`${styles.column} ${styles['column--switcher']}`} lg={8}>
          {allowMultiView && (
            <div className={styles.switcher}>
              <IconButton
                className={clsx(styles.button, view === GRID_VIEW && styles.selected)}
                kind="ghost"
                label="Grid view"
                onClick={() => {
                  onView(GRID_VIEW)
                }}
                size="lg"
              >
                <GridIcon size={20} />
              </IconButton>
              <IconButton
                className={clsx(styles.button, view === LIST_VIEW && styles.selected)}
                kind="ghost"
                label="List view"
                onClick={() => {
                  onView(LIST_VIEW)
                }}
                size="lg"
              >
                <ListIcon size={20} />
              </IconButton>
            </div>
          )}
        </Column>
      </Grid>
    </div>
  )
}

CatalogSort.defaultProps = {
  defaultSortIndex: 0,
  allowMultiView: true
}

CatalogSort.propTypes = {
  allowMultiView: PropTypes.bool,
  defaultSortIndex: PropTypes.number,
  onSort: PropTypes.func,
  onView: PropTypes.func,
  sort: PropTypes.string,
  sortOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
    })
  ).isRequired,
  view: PropTypes.oneOf(['grid', 'list'])
}

export default CatalogSort
