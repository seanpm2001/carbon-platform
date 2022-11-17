import { Blockquote } from '@carbon-platform/mdx-components'

/*
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export const BlockquoteMapper = ({ cite, children }) => (
  <Blockquote cite={cite}>{children}</Blockquote>
)
