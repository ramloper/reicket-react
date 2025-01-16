import React from 'react'
import { privateApi, publicApi, sendPrivateRequestWithToast, sendPublicRequestWithToast } from '../../lib/sendApi'
import MyButton from '../../components/common/button/MyButton'
import { useNavigate } from 'react-router-dom'
import "./home.css"
const Home = () => {
    const nav = useNavigate();
    const getAccessToken = async () => {
        const response = await sendPrivateRequestWithToast({
            url: '/admin/token/verify',
            method: 'GET'
        })

    }
    const logoutReqeust = async () => {
        publicApi.put('/logout', null, { withCredentials: true })
            .then(() => { nav("/login") })
    }
    return (
        <div className='home'>
            <MyButton text='토큰 검증' onSubmit={getAccessToken} />
            <MyButton text='로그아웃' onSubmit={logoutReqeust} />
        </div>
    )
}

export default Home