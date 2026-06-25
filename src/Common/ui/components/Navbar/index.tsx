import { observer } from 'mobx-react-lite'
import { useNavbarController } from '@Auth/ui/controllers/useNavbarController'
import {
  Nav, Logo, NavLinks, StyledNavLink,
  RightSection, SearchInput, Avatar, LogoutButton,
} from './StyledComponents.ts'

export const Navbar = observer(() => {
  const { username, logout } = useNavbarController()

  return (
    <Nav>
      <Logo to="/">🎬 CineView</Logo>

      <NavLinks>
        <StyledNavLink to="/" end>Home</StyledNavLink>
        <StyledNavLink to="/search">Search</StyledNavLink>
        <StyledNavLink to="/watchlist">Watchlist</StyledNavLink>
        <StyledNavLink to="/lists">My Lists</StyledNavLink>
      </NavLinks>

      <RightSection>
        <SearchInput
          type="search"
          placeholder="Search movies & shows…"
          aria-label="Global search"
        />
        <Avatar aria-label={`Logged in as ${username}`}>
          {username.charAt(0).toUpperCase()}
        </Avatar>
        <LogoutButton onClick={logout}>Logout</LogoutButton>
      </RightSection>
    </Nav>
  )
})