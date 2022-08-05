import { createI18n } from 'vue-i18n'
import { type Messages, LanguageType } from './localizationTypes'

const enMessages: Messages = {
  header: { title: 'Dashboard' }
}
const ruMessages: Messages = {
  header: { title: 'Основная информация' }
}

const messages = {
  en: enMessages,
  ru: ruMessages,
}

const i18n = createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: LanguageType.EN,
  fallbackLocale: LanguageType.EN,
  messages,
})

export default i18n