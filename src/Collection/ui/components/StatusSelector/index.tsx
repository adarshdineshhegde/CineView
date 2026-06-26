import { useTranslation } from 'react-i18next'
import type { WatchlistStatus } from '../../../core/types/Collection.types'
import { Wrapper, Option } from './StyledComponents'

interface Props {
  value: WatchlistStatus
  onChange: (status: WatchlistStatus) => void
}

const OPTIONS: { value: WatchlistStatus; labelKey: string }[] = [
  { value: 'want_to_watch', labelKey: 'status.wantToWatch' },
  { value: 'watching', labelKey: 'status.watching' },
  { value: 'completed', labelKey: 'status.completed' },
]

export const StatusSelector = ({ value, onChange }: Props) => {
  const { t } = useTranslation('collection')

  return (
    <Wrapper role="radiogroup" aria-label={t('statusLabel')}>
      {OPTIONS.map((opt) => (
        <Option
          key={opt.value}
          $active={value === opt.value}
          onClick={() => onChange(opt.value)}
          type="button"
        >
          {t(opt.labelKey)}
        </Option>
      ))}
    </Wrapper>
  )
}