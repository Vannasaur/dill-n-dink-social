// import "./App.css";
import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default App
