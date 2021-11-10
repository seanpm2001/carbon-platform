/*
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Button, Dropdown } from '@carbon/react'
import { Svg12LeftContentSwitcher } from '@carbon-platform/icons'

import styles from './catalog-sort.module.scss'

const CatalogSort = () => {
  const options = ['Hi', 'Bye']

  return (
    <div className={styles.container}>
      <div className={styles.dropdownText}>
        <Dropdown
          id="component-index-sort"
          initialSelectedItem="Most used"
          items={options}
          light
          className={styles.dropdown}
          // onChange={({ selectedItem }) => {
          //   onChange(selectedItem);
          // }}
          type="inline"
          titleText="Sort by:"
          label="Most used"
        />
      </div>
      <div>
        <Dropdown
          className={styles.toggle}
          id="component-index-sort"
          initialSelectedItem="Hola"
          items={options}
          light
          // onChange={({ selectedItem }) => {
          //   onChange(selectedItem);
          // }}
          type="inline"
          titleText="Sort by:"
          label="hello"
        />
      </div>
      <div className={styles.switcher}>
        <Button
          size="md"
          kind="ghost"
          renderIcon={Svg12LeftContentSwitcher}
          iconDescription="Icon Description"
          hasIconOnly
        />
        <Button
          size="md"
          kind="secondary"
          renderIcon={Svg12LeftContentSwitcher}
          iconDescription="Icon Description"
          hasIconOnly
        />
      </div>
    </div>
  )
}

export default CatalogSort
