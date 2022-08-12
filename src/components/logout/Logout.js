import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

import { useAuthContext } from "../../contexts/AuthContext";
import * as authService from '../../services/authService';

export const Logout = () => {
    const navigate = useNavigate();
    const { user, userLogout } = useAuthContext();

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate('/');
            })
            .catch(() => {
                navigate('*');
            });
    });

    return null;
};

