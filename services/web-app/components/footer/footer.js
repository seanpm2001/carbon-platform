/*
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Column, Grid, Theme } from '@carbon/react'
import clsx from 'clsx'
import Link from 'next/link'
import PropTypes from 'prop-types'

import styles from './footer.module.scss'

const Footer = ({ hasSideNav }) => {
  const colOne = [
    {
      text: 'Contribute',
      link: ''
    },
    {
      text: 'Privacy',
      link: ''
    },
    {
      text: 'Terms of Use',
      link: ''
    },
    {
      text: 'IBM.com',
      link: ''
    }
  ]

  const colTwo = [
    {
      text: 'Medium',
      link: ''
    },
    {
      text: 'Twitter',
      link: ''
    }
  ]

  const IBMLogo = () => (
    <svg fill="#f4f4f4" width="81" height="32" xmlns="http://www.w3.org/2000/svg">
      {' '}
      <g fillRule="evenodd">
        {' '}
        {/* eslint-disable-next-line max-len */}
        <path d="M0 32h15.689v-2.038H0zM0 27.721h15.689v-2.038H0zM4.483 23.442h6.724v-2.037H4.483zM4.483 19.164h6.724v-2.038H4.483zM4.483 14.885h6.724v-2.037H4.483zM4.482 10.606h6.724V8.568H4.482zM0 6.327h15.689V4.29H0zM0 2.049h15.689V.011H0zM17.93 29.963V32h16.504a8.521 8.521 0 0 0 5.54-2.037H17.93zM17.93 25.683v2.038h23.914a8.535 8.535 0 0 0 .85-2.038H17.93zM22.412 23.442h6.724v-2.037h-6.724zM40.124 17.126H22.412v2.038H41.77a8.62 8.62 0 0 0-1.645-2.038M22.413 12.848v2.036h17.786a8.612 8.612 0 0 0 1.644-2.037h-19.43zM42.693 6.327a8.447 8.447 0 0 0-.85-2.037H17.93v2.037h24.763zM39.974 2.049a8.521 8.521 0 0 0-5.54-2.037H17.93v2.037h22.044zM22.412 10.606h6.724V8.568h-6.724zM35.453 10.606h7.29a8.603 8.603 0 0 0 .248-2.038h-7.538v2.038zM35.453 21.405v2.037h7.538c0-.703-.09-1.384-.248-2.037h-7.29zM57.457 0H44.825v2.038h13.34zM44.826 32h11.21v-2.038h-11.21zM44.826 27.72h11.21v-2.038h-11.21zM49.309 23.439h6.727v-2.038h-6.727zM49.309 19.159h6.727v-2.038h-6.727zM69.488 32h11.21v-2.038h-11.21zM69.488 27.72h11.21v-2.038h-11.21zM69.488 23.439h6.726v-2.038h-6.726zM69.487 19.159h6.726v-2.038h-6.726zM69.488 14.879h6.726V12.84H63.606l-.707 2.038h5.903l.686-1.94zM61.916 12.84H49.31v2.039h6.726v-1.94l.686 1.94h5.903zM76.213 8.56H65.091l-.707 2.038h11.83zM68.06 0l-.706 2.038h13.344V0zM62.757 32l.72-2.038h-1.432zM61.254 27.72h3.015l.72-2.038h-4.455zM59.743 23.44h6.037l.72-2.039h-7.476zM58.232 19.159h9.06l.719-2.038h-10.5zM49.309 10.598h11.83l-.707-2.038H49.309zM65.868 6.318h14.83V4.28H66.576zM58.947 4.28H44.826v2.038h14.828z" />{' '}
      </g>{' '}
    </svg>
  )

  return (
    <Theme theme="g100" className={styles.container}>
      <footer>
        <Grid className={styles.grid}>
          <Column
            sm={4}
            md={2}
            lg={hasSideNav ? { span: 2, start: 6 } : { span: 2, start: 1 }}
            xlg={{ span: 2, start: 5 }}
            className={styles.column}
          >
            {colOne.map((item, i) => (
              <Link href={item.link} key={i}>
                <a className={clsx(styles.text, styles.textLink)}>{item.text}</a>
              </Link>
            ))}
          </Column>
          <Column
            sm={4}
            md={2}
            lg={hasSideNav ? 5 : 6}
            xlg={4}
            className={clsx(styles.column, styles.columnBorder)}
          >
            {colTwo.map((item, i) => (
              <Link href={item.link} key={i}>
                <a className={clsx(styles.text, styles.textLink)}>{item.text}</a>
              </Link>
            ))}
          </Column>
          <Column sm={4} md={3} lg={4} xlg={3} className={clsx(styles.column, styles.columnBorder)}>
            <p className={styles.text}>
              Have questions?{' '}
              <Link href="https://www.google.com">
                <a className={clsx(styles.text, styles.textUnderline)}>Email</a>
              </Link>{' '}
              us for site feedback or open an issue in{' '}
              <Link href="https://www.google.com">
                <a className={clsx(styles.text, styles.textUnderline)}>Github.</a>
              </Link>
            </p>
          </Column>
          <Column
            sm={4}
            md={8}
            lg={hasSideNav ? { span: 16, start: 6 } : { span: 16, start: 1 }}
            xlg={hasSideNav ? { span: 16, start: 5 } : { span: 16, start: 1 }}
            className={styles.logo}
          >
            <IBMLogo />
          </Column>
        </Grid>
      </footer>
    </Theme>
  )
}

Footer.propTypes = {
  isExpanded: PropTypes.bool
}

export default Footer
