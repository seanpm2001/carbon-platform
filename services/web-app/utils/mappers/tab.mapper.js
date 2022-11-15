import { Tab } from '@carbon-platform/mdx-components'

/*
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export const TabMapper = ({ children, _id, label, active, index, tab }) => (
  <Tab _id={_id} label={label} active={active} index={index} tab={tab}>
    {children}
  </Tab>
)
