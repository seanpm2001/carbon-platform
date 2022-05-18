/*
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { type } from '@/data/type'

export const globalNavData = [
  {
    title: 'About'
  },
  {
    title: 'Standards'
  },
  {
    path: '/assets',
    title: 'Assets'
  }
]

export const standardsNavData = [
  {
    path: '/standards',
    title: 'About Standards'
  }
]

export const assetsNavData = [
  {
    path: '/assets',
    title: 'About Assets'
  },
  {
    path: '/assets/libraries',
    title: 'Libraries'
  },
  {
    title: 'Guidelines',
    items: [
      {
        path: '/assets/guidelines/2x-grid/overview',
        title: '2x Grid',
        hasTabs: true
      },
      {
        path: '/assets/guidelines/accessibility/overview',
        title: ' Accessibility',
        hasTabs: true
      },
      {
        path: '/assets/guidelines/content/overview',
        title: ' Content',
        hasTabs: true
      },
      {
        path: '/assets/guidelines/color/overview',
        title: ' Color',
        hasTabs: true
      },
      {
        path: '/assets/guidelines/icons/library',
        title: ' Icons',
        hasTabs: true
      },
      {
        path: '/assets/guidelines/pictograms/library',
        title: ' Pictograms',
        hasTabs: true
      },
      {
        path: '/assets/guidelines/motion/overview',
        title: ' Motion',
        hasTabs: true
      },
      {
        path: '/assets/guidelines/spacing/overview',
        title: ' Spacing',
        hasTabs: true
      },
      {
        path: '/assets/guidelines/themes/overview',
        title: ' Themes',
        hasTabs: true
      },
      {
        path: '/assets/guidelines/typography/overview',
        title: ' Typography',
        hasTabs: true
      }
    ]
  },
  {
    title: 'Catalogs',
    isSection: true,
    items: [
      {
        path: type.component.path,
        title: type.component.namePlural
      },
      // remove elements for the first release
      // {
      //   path: type.element.path,
      //   title: type.element.namePlural
      // },
      {
        path: type.function.path,
        title: type.function.namePlural
      },
      {
        path: type.pattern.path,
        title: type.pattern.namePlural
      },
      {
        path: type.template.path,
        title: type.template.namePlural
      }
    ]
  },
  {
    title: 'Collections',
    isSection: true,
    items: [
      {
        path: '/assets/data-visualization',
        title: 'Data visualization'
      }
    ]
  }
]

export const libraryNavData = [
  {
    title: 'Assets',
    path: '/assets/carbon-charts/library-assets'
  },
  {
    title: 'Design kits',
    path: ''
  },
  {
    title: 'Tutorials',
    items: [
      {
        title: 'Tutorial 1',
        items: [
          {
            title: 'Overview',
            path: ''
          },
          {
            title: '1. Installing Carbon',
            path: ''
          },
          {
            title: '2. Building pages',
            path: ''
          },
          {
            title: '3. Using APIs',
            path: ''
          },
          {
            title: '4. Creating components',
            path: ''
          },
          {
            title: '5. Deploying to cloud',
            path: ''
          },
          {
            title: 'Conclusion',
            path: ''
          }
        ]
      },
      {
        title: 'Tutorial 2',
        path: ''
      }
    ]
  },
  {
    title: 'Versions',
    path: ''
  },

  {
    title: 'Catalogs'
  }
]
