/*
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Removes a leading slash from a string
 * @param {string} str
 * @returns {string} A string with no leading slash
 */
export const removeLeadingSlash = (str) => {
  return str.replace(/^\/+/, '')
}

/**
 * Add a trailinsh slash to a string
 * @param {string} str
 * @returns {string} A string with a trailing slash
 */
export const addTrailingSlash = (str) => {
  return str.endsWith('/') ? str : `${str}/`
}
