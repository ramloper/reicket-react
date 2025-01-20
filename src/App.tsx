import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import './App.css'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className='commonLayoutContainer'>
      <div style={{ flex: 1, width: '100%' }}>
        <Outlet />
        <ToastContainer />
      </div>
      <Footer />
    </div>
  )
}

export default App
