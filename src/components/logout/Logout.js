import { useNavigate } from "react-router-dom";

export const Logout = ({onLogout}) => {
    const navigate = useNavigate();
    onLogout();
    navigate('/');
}
