import React, { useState } from 'react'
import TextInput from '../common/input/TextInput'
import styles from "./LoginForm.module.css"
import MyButton from '../common/button/MyButton'

interface loginParam {
    id: string,
    password: string
}

const LoginForm = () => {
    const [loginParam, setLoginParma] = useState({
        id: "",
        password: ""
    });
    const onChangeLoginParam = (e) => {
        setLoginParma({
            ...loginParam,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className='LoginForm'>
            <TextInput
                className={styles.a}
                name='text'
                value={loginParam.id}
                onChange={onChangeLoginParam}
                onSubmit={() => { }}
                placeholder='아이디'
            />
            <TextInput
                className='whiteTextInput'
                name='password'
                value={loginParam.password}
                onChange={onChangeLoginParam}
                placeholder='비밀번호'
                onSubmit={() => { }} />
            <MyButton />
        </div>
    )
}

export default LoginForm