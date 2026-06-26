import { useTranslation } from 'react-i18next'
import { SUPPORTED_REGIONS } from '../../../core/types/Preferences.types'
import { REGION_LABELS } from '../../../core/constants/Preferences.constants'
import type { Region } from '../../../core/types/Preferences.types'
import { Select } from '../LanguageSwitcher/StyledComponents'

interface Props {
  value: Region
  onChange: (region: Region) => void
}

export const RegionSelector = ({ value, onChange }: Props) => {
  const { t } = useTranslation('preferences')

  return (
    <Select
      aria-label={t('region')}
      value={value}
      onChange={(e) => onChange(e.target.value as Region)}
    >
      {SUPPORTED_REGIONS.map((region) => (
        <option key={region} value={region}>{REGION_LABELS[region]}</option>
      ))}
    </Select>
  )
}

