/*
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { MdxJsxAttribute, MdxJsxExpressionAttribute } from 'mdast-util-mdx-jsx'

import { Scalar } from './interfaces.js'

function convertAttributesToProps(attributes: Array<MdxJsxAttribute | MdxJsxExpressionAttribute>) {
  const props: Record<string, Scalar> = {}

  attributes.forEach((attr) => {
    // Guard - disregard expression attrs with no name
    if (attr.type === 'mdxJsxExpressionAttribute') {
      return
    }

    // Guard - disregard attrs with undefined values
    if (attr.value === undefined) {
      return
    }

    // A null attr value indicates the presence of the prop, but with no value
    // React treats these as "true"
    if (attr.value === null) {
      props[attr.name] = true
      return
    }

    // String
    if (typeof attr.value === 'string') {
      props[attr.name] = attr.value
      return
    }

    // Boolean
    if (attr.value.value === 'true' || attr.value.value === 'false') {
      props[attr.name] = attr.value.value === 'true'
    }

    // Number
    if (attr.value.value === String(Number.parseFloat(attr.value.value))) {
      props[attr.name] = Number.parseFloat(attr.value.value)
    }
  })

  return props
}

export { convertAttributesToProps }
