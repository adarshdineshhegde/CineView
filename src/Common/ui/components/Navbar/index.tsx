import { NavLink, useNavigate , useLocation} from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { useNavbarController } from 'src/Auth/ui/controllers/useNavbarController.ts'
import {
  Nav, Logo, NavLinks, StyledNavLink,
  RightSection, Avatar, LogoutButton, Badge, NavItemWrapper,
} from './StyledComponents'

export const Navbar = observer(() => {
  const { t } = useTranslation('common')
  const { username, logout, watchlistCount } = useNavbarController()
  const navigate = useNavigate()
  const location = useLocation()

  const handleAvatarClick = () => {
    if (location.pathname === '/settings') {
      navigate(-1)
    } else {
      navigate('/settings')
    }
  }
  
  return (
    <Nav>
      <Logo to="/">🎬 CineView</Logo>

      <NavLinks>
        <StyledNavLink to="/" end>{t('nav.home')}</StyledNavLink>
        <StyledNavLink to="/search">{t('nav.search')}</StyledNavLink>
        <NavItemWrapper>
          <StyledNavLink to="/watchlist">{t('nav.watchlist')}</StyledNavLink>
          {watchlistCount > 0 && <Badge>{watchlistCount}</Badge>}
        </NavItemWrapper>
        <StyledNavLink to="/lists">{t('nav.myLists')}</StyledNavLink>
      </NavLinks>

      <RightSection>
       <Avatar
          aria-label={`Logged in as ${username}`}
          onClick={handleAvatarClick}
       >
         {username.charAt(0).toUpperCase()}
       </Avatar>
        <LogoutButton onClick={logout}>{t('nav.logout')}</LogoutButton>
      </RightSection>
    </Nav>
  )
})