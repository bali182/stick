import React from 'react'
import { useTranslation } from 'react-i18next'
import { Messages } from './languages/types'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    'data-tooltip'?: string
  }
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en'
    resources: {
      en: Messages
    }
  }
}
