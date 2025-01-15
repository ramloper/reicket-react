import { Outlet } from 'react-router-dom'
import './App.css'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className='commonLayoutContainer'>
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
