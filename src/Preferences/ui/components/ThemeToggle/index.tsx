import { useTranslation } from 'react-i18next'
import type { Theme } from '../../../core/types/Preferences.types'
import { Wrapper, Option } from './StyledComponents'

interface Props {
  value: Theme
  onChange: (theme: Theme) => void
}

export const ThemeToggle = ({ value, onChange }: Props) => {
  const { t } = useTranslation('preferences')

  return (
    <Wrapper role="radiogroup" aria-label={t('theme')}>
      <Option $active={value === 'light'} onClick={() => onChange('light')}>
        ☀️ {t('themeLight')}
      </Option>
      <Option $active={value === 'dark'} onClick={() => onChange('dark')}>
        🌙 {t('themeDark')}
      </Option>
    </Wrapper>
  )
}