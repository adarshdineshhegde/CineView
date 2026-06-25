import { Outlet } from 'react-router-dom'

const ShellLayout = () => {
  return (
    <div data-testid="ShellLayout">
      <nav style={{ padding: '1rem', borderBottom: '1px solid #333' }}>
        CineView — Navbar placeholder
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default ShellLayout
