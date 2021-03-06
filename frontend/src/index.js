import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'

import App from './App'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import common_de from './data/common_de.json'
import common_en from './data/common_en.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: common_en, // 'common' is = custom namespace
    },
    de: {
      common: common_de,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
