import { loginParam } from "../types/login";
import { privateApi, publicApi } from "./sendApi";

export const loginAction = (loginParam: loginParam) => {
    const url = 'http://localhost:8089/api/login'
    publicApi.post('/login', loginParam)
        .then(res => {
            console.log(res)
            setAccessToken(res.data.data)
        }).catch(error => {
            console.log(error)
        })
}

export const getAccessToken = () => {
    publicApi.post('/refresh')
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
}

const setAccessToken = (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken)
}