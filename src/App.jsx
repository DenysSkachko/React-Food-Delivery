import { Routes, Route } from 'react-router-dom'
import { Sidebar } from './shared/Sidebar'
import Home from './pages/Home'
import Discounts from './pages/Discounts'
import Dashboard from './pages/Dashboard'
import Messages from './pages/Messages'
import Notifications from './pages/Notifications'
import Settings from './pages/Settings'
import Logo from './assets/logo.svg?react'


function App() {
  return (
    <>
      <Sidebar />
      <main className="w-screen h-screen flex items-start pl-26">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discounts" element={<Discounts />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </>
  )
}

export default App
