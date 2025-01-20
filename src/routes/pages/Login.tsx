import React from 'react'
import "./Login.css"
import LoginForm from '../../components/login/LoginForm'
import { ToastContainer } from 'react-toastify'
const Login = () => {
    const accessToken: string | null = localStorage.getItem("accessToken")
    if (accessToken) {
        localStorage.removeItem("accessToken")
    }
    return (
        <div className='login'>
            <div className='Login'>
                {/* <div className='title'>Re;cket</div> */}
                <LoginForm />
                {/* <div>SnsLoginButton</div>
                <div>Join</div> */}
            </div>
            <ToastContainer />

        </div>
    )
}

export default Login

