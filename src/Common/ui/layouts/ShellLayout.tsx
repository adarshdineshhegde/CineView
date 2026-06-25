import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import styled from 'styled-components'

const Main = styled.main`
  min-height: calc(100vh - 64px);
  background: #0f0f0f;
  color: #ffffff;
`

export const ShellLayout = () => (
  <>
    <Navbar />
    <Main>
      <Outlet />
    </Main>
  </>
)