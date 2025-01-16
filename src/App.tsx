import { Outlet } from 'react-router-dom'
import './App.css'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Footer from './components/footer/Footer'
import { Cookies, useCookies } from 'react-cookie'
function App() {
  const cookies = new Cookies();

  console.log(cookies.get("refreshToken"))
  return (
    <div className='commonLayoutContainer'>
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
