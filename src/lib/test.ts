import { sendPrivateRequestWithToast } from "./sendApi";

export const getApi = async () => {
    const response = await sendPrivateRequestWithToast({
        url: '/admin/token/verify',
        method: 'GET'
    })
    return response.data
}
