import { LanguagesTypes } from 'types'

const months: Record<LanguagesTypes, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

export const formatDate = (date: Date, language?: LanguagesTypes): string => {
  return `${date.getDate().toString().padStart(2, '0')} ${
    months[language ?? 'en'][date.getMonth()]
  }`
}
