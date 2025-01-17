import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { myToast } from '../../lib/alert'
import { loginAction, setAccessToken } from '../../lib/login'
import { loginParam } from '../../types/login'
import MyButton from '../common/button/MyButton'
import TextInput from '../common/input/TextInput'
import styles from "./LoginForm.module.css"

const LoginForm = () => {
    const nav = useNavigate();
    const [loginParam, setLoginParma] = useState<loginParam>({
        loginId: "local",
        password: "1"
    });
    const onChangeLoginParam = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginParma({
            ...loginParam,
            [e.target.name]: e.target.value
        })
    }
    const handelLogin = async () => {
        loginAction(loginParam)
            .then((res: any) => {
                const accessToken = res.data.data;
                setAccessToken(accessToken);
                nav("/", { replace: true })
            })
            .catch((error: any) => {
                myToast(error.response.data.data.value, 'error')
                // alert()
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
            <MyButton text="로그인" onSubmit={handelLogin} />
        </div>
    )
}

export default LoginForm