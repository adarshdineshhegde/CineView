import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Wrapper, Emoji, Message, BrowseLink } from './StyledComponents'

export const EmptyWatchlist = () => {
  const { t } = useTranslation('collection')

  return (
    <Wrapper>
      <Emoji>🎬</Emoji>
      <Message>{t('empty.message')}</Message>
      <BrowseLink as={Link} to="/">{t('empty.cta')}</BrowseLink>
    </Wrapper>
  )
}