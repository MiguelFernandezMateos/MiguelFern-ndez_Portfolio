import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
