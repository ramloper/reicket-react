import React, { ChangeEvent, useState } from 'react'
import TextInput from '../common/input/TextInput'
import styles from "./LoginForm.module.css"
import MyButton from '../common/button/MyButton'
import { loginParam } from '../../types/login'
import { getAccessToken, loginAction } from '../../lib/login'

const LoginForm = () => {
    const [loginParam, setLoginParma] = useState<loginParam>({
        loginId: "",
        password: ""
    });
    const onChangeLoginParam = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginParma({
            ...loginParam,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={styles.LoginForm}>
            <TextInput
                className='whiteTextInput'
                name='loginId'
                value={loginParam.loginId}
                onChange={onChangeLoginParam}
                onSubmit={() => loginAction(loginParam)}
                placeholder='아이디'
            />
            <TextInput
                className='whiteTextInput'
                name='password'
                value={loginParam.password}
                onChange={onChangeLoginParam}
                placeholder='비밀번호'
                onSubmit={() => loginAction(loginParam)} />
            <MyButton text="로그인" onSubmit={() => loginAction(loginParam)} />
            <MyButton text="리프레쉬" onSubmit={() => getAccessToken()} />
        </div>
    )
}

export default LoginForm