import langEN from '../assets/lang/en.json'
import langDE from '../assets/lang/de.json'

const langs = {
  en: langEN,
  de: langDE
}

const __ = function(translation, lang) {
  return langs[lang][translation] || translation
}

export default __
