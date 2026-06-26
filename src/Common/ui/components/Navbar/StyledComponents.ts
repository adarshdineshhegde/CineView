import styled from 'styled-components'
import { NavLink as RouterNavLink } from 'react-router-dom'

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  height: 64px;
  background: var(--bg-secondary);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border-color);
`

export const Logo = styled(RouterNavLink)`
  font-size: 1.25rem;
  font-weight: 700;
  color: #e50914;
  text-decoration: none;
  flex-shrink: 0;
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
`

export const StyledNavLink = styled(RouterNavLink)`
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: var(--text-primary);
    background: var(--border-color);
  }

  &.active {
    color: var(--text-primary);
    background: var(--border-color);
  }
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: auto;
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
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--text-secondary);
  font-size: 0.8125rem;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;

  &:hover {
    color: var(--text-primary);
    border-color: var(--text-primary);
  }
`

export const NavItemWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`

export const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 16px;
  height: 16px;
  border-radius: 8px;
  background: #e50914;
  color: #ffffff;
  font-size: 0.625rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
  pointer-events: none;
`