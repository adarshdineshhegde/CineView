import { useTranslation } from 'react-i18next'
import { SUPPORTED_LOCALES } from '../../../core/types/Preferences.types'
import { LOCALE_LABELS } from '../../../core/constants/Preferences.constants'
import type { Locale } from '../../../core/types/Preferences.types'
import { Select } from './StyledComponents'

interface Props {
  value: Locale
  onChange: (locale: Locale) => void
}

export const LanguageSwitcher = ({ value, onChange }: Props) => {
  const { t } = useTranslation('preferences')

  return (
    <Select
      aria-label={t('language')}
      value={value}
      onChange={(e) => onChange(e.target.value as Locale)}
    >
      {SUPPORTED_LOCALES.map((locale) => (
        <option key={locale} value={locale}>{LOCALE_LABELS[locale]}</option>
      ))}
    </Select>
  )
}