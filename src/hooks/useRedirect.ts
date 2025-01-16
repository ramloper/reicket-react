import { useNavigate } from "react-router-dom";

export const useLoginRedirect = () => {
    const nav = useNavigate();
    nav('/login')
}