import React from 'react'
import "./Login.css"
import LoginForm from '../../components/login/LoginForm'
const Login = () => {
    return (
        <div className='commonLayoutContainer login'>
            <div className='Login'>
                <div className='title'>Re;cket</div>
                <LoginForm />
                <div>SnsLoginButton</div>
                <div>Join</div>

            </div>

        </div>
    )
}

export default Login

