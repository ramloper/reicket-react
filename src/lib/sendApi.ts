import axios, { AxiosRequestConfig } from "axios";
import { setAccessToken } from "./login";
import { toast } from "react-toastify";

export const privateApi = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    headers: {
        Authorization: `${localStorage.getItem('accessToken')}`,
    },
});

privateApi.interceptors.request.use((config) => {
    config.headers.Authorization = `${localStorage.getItem('accessToken')}`
    return config
})

privateApi.interceptors.response.use(
    (response) => {
        toast.update("...")
        return response;
    },
    async (error) => {
        if (error.response?.status === 401) {
            await getAccessToken()
            error.config.headers = {
                'Content-Type': 'application/json',
                Authorization: `${localStorage.getItem('accessToken')}`,
            }
            const response = await axios.request(error.config);
            return response
        }
        return Promise.reject(error)
    }
)

export const sendRequestWithToast = async (requestConfig: AxiosRequestConfig<any>) => {
    return toast.promise(
        privateApi(requestConfig), // Axios 요청
        {
            pending: 'Loading...', // 로딩 상태
            success: 'Request Successful!', // 성공 메시지
            error: 'Request Failed!', // 실패 메시지
        },
        {
            autoClose: 3000, // 3초 후 자동 닫힘
        }
    );
};
export const publicApi = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`
});


const getAccessToken = async () => {
    return publicApi.post('/refresh', {}, {
        withCredentials: true
    })
        .then(res => {
            setAccessToken(res.data.data)
            // console.log(res)
        })
        .catch(error => {
            // console.log(error)
        })
}