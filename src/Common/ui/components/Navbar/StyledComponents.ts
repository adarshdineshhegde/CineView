import styled from 'styled-components'
import { NavLink as RouterNavLink } from 'react-router-dom'

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse at 50% 40%, #1a0a0a 0%, #0f0f0f 70%);
`
export const Card = styled.div`
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-top: 1px solid #3a1010;
  border-radius: 12px;
  padding: 2.5rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 40px rgba(229, 9, 20, 0.08), 0 20px 60px rgba(0,0,0,0.6);
`

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  height: 64px;
  background: rgba(15, 15, 15, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #2a2a2a;
`

export const Logo = styled(RouterNavLink)`
  font-size: 1.25rem;
  font-weight: 800;
  color: #e50914;
  letter-spacing: -0.5px;
  margin-bottom: 0;
  text-decoration: none;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
`

export const StyledNavLink = styled(RouterNavLink)`
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  color: #b3b3b3;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: #ffffff;
    background: #2a2a2a;
  }

  &.active {
    color: #ffffff;
    background: #2a2a2a;
  }
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: auto;
`

export const SearchInput = styled.input`
  padding: 0.375rem 0.75rem;
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 20px;
  color: #ffffff;
  font-size: 0.8125rem;
  width: 220px;
  outline: none;
  transition: border-color 0.15s, width 0.2s;

  &:focus {
    border-color: #e50914;
    width: 280px;
  }

  &::placeholder {
    color: #666;
  }
`

export const Avatar = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e50914;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoutButton = styled.button`
  background: none;
  border: 1px solid #3a3a3a;
  border-radius: 6px;
  color: #b3b3b3;
  font-size: 0.8125rem;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;

  &:hover {
    color: #ffffff;
    border-color: #ffffff;
  }
`

