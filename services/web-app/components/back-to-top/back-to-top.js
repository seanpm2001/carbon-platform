/*
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { UpToTop } from '@carbon/icons-react'
import clsx from 'clsx'
import { useCallback, useEffect, useState } from 'react'

import useEventListener from '@/utils/use-event-listener'

import styles from './back-to-top.module.scss'

const BackToTop = () => {
  const [hidden, setHidden] = useState(true)

  const scrollHandler = useCallback(() => {
    if (window.scrollY >= 300) {
      setHidden(false)
    }
    if (window.scrollY < 300) {
      setHidden(true)
    }
  }, [])

  useEventListener('scroll', scrollHandler)
  useEffect(() => {
    scrollHandler()
  }, [scrollHandler])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
      className={clsx(styles.button, { [styles.hidden]: hidden })}
      type="button"
      aria-label="Back to Top"
    >
      <UpToTop size={20} />
    </button>
  )
}

export default BackToTop
