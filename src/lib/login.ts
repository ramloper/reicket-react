import { loginParam } from "../types/login";
import { publicApi } from "./sendApi";

export const loginAction = async (loginParam: loginParam): Promise<string> => {
    return publicApi.post('/login', loginParam, { withCredentials: true })
}
export const setAccessToken = (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken)
}