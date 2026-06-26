import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { useRootStore } from '@/data/providers'
import { useNavigate } from 'react-router-dom'
import { LanguageSwitcher } from '../components/LanguageSwitcher'
import { RegionSelector } from '../components/RegionSelector'
import { ThemeToggle } from '../components/ThemeToggle'
import { Wrapper, Title, Field, Label, LogoutButton } from './StyledComponents'

export const SettingsPage = observer(() => {
  const { t } = useTranslation('preferences')
  const { preferencesStore, sessionStore } = useRootStore()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await sessionStore.logout()
    navigate('/login')
  }

  return (
    <Wrapper data-testid="settings-page">
      <Title>{t('title')}</Title>

      <Field>
        <Label>{t('language')}</Label>
        <LanguageSwitcher value={preferencesStore.locale} onChange={preferencesStore.setLocale} />
      </Field>

      <Field>
        <Label>{t('region')}</Label>
        <RegionSelector value={preferencesStore.region} onChange={preferencesStore.setRegion} />
      </Field>

      <Field>
        <Label>{t('theme')}</Label>
        <ThemeToggle value={preferencesStore.theme} onChange={preferencesStore.setTheme} />
      </Field>

      <LogoutButton onClick={handleLogout}>{t('logout')}</LogoutButton>
    </Wrapper>
  )
})