import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

var euskara = 'eu_ES'
var español = 'es_ES'
var browserLanguage = window.navigator.userLanguage || window.navigator.language

var language = euskara
if (español.includes(browserLanguage)) {
  language = español
}

const i18n = new VueI18n({
  locale: language,
  fallbackLocale: 'es_ES',
  messages: {
    'eu_ES': require('./eu_ES.json'),
    'es_ES': require('./es_ES.json')
  }
})

if (module.hot) {
  module.hot.accept(['./eu_ES', './es_ES'], () => {
    i18n.setLocaleMessage('eu_ES', require('./eu_ES.json'))
    i18n.setLocaleMessage('es_ES', require('./es_ES.json'))
    console.log('hot reload', this, arguments)
  })
}

export function setI18nLanguage (lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function getI18nLanguage () {
  return i18n.locale
}

export default i18n
