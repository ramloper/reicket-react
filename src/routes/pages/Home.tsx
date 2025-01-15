import React from 'react'
import { privateApi, sendRequestWithToast } from '../../lib/sendApi'
import MyButton from '../../components/common/button/MyButton'
import { useNavigate } from 'react-router-dom'
import "./home.css"
const Home = () => {
    const getAccessToken = async () => {
        const response = await sendRequestWithToast({
            url: '/admin/token/verify',
            method: 'GET'
        })
    }
    const nav = useNavigate();
    return (
        <div className='home'>
            <MyButton text='토큰 검증' onSubmit={getAccessToken} />
            <MyButton text='로그인페이지' onSubmit={() => { nav('/login') }} />
        </div>
    )
}

export default Home