import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useStore";

export function useLogout() {
    const navigate = useNavigate()
    const setEmail = useUserStore((state) => state.setEmail)

    const handleLogout = () => {
        localStorage.removeItem("user")
        setEmail("")
        navigate("/")
    }

    return handleLogout
}