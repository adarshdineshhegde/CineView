import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { useNavbarController } from '@/Auth/ui/controllers/useNavbarController'
import {
  Nav, Logo, NavLinks, StyledNavLink,
  RightSection, Avatar, LogoutButton,
} from './StyledComponents'

export const Navbar = observer(() => {
  const { t } = useTranslation('common')
  const { username, logout } = useNavbarController()
  const navigate = useNavigate()

  return (
    <Nav>
      <Logo to="/">🎬 CineView</Logo>

      <NavLinks>
        <StyledNavLink to="/" end>{t('nav.home')}</StyledNavLink>
        <StyledNavLink to="/search">{t('nav.search')}</StyledNavLink>
        <StyledNavLink to="/watchlist">{t('nav.watchlist')}</StyledNavLink>
        <StyledNavLink to="/lists">{t('nav.myLists')}</StyledNavLink>
      </NavLinks>

      <RightSection>
        <Avatar
          aria-label={`Logged in as ${username}`}
          onClick={() => navigate('/settings')}
        >
          {username.charAt(0).toUpperCase()}
        </Avatar>
        <LogoutButton onClick={logout}>{t('nav.logout')}</LogoutButton>
      </RightSection>
    </Nav>
  )
})