import {useEffect} from "react";

import {
    useLocation,
    useHistory,
} from "react-router-dom";

import {
    FEED,
    SIGN_IN,
    SIGN_UP,
} from "../../helpers/routes";

import {Layout} from "../layout";
import {AuthArea} from "../auth-area";
import { useAuth } from "../auth-provider/use-auth";

export const AuthRoute = () => {
    const {user} = useAuth()
    
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if (!user) {
            const isUrlAuth = location.pathname !== SIGN_IN && location.pathname !== SIGN_UP

            if (isUrlAuth) {
                history.push(SIGN_UP)
            }
        }
    }, [
        location.pathname,
        user,
    ])

    useEffect(() => {
        if (user) {
            const isUrlNotAuth = location.pathname === SIGN_IN || location.pathname === SIGN_UP

            if (isUrlNotAuth) {
                history.push(FEED)
            }
        }
    }, [
        location.pathname,
        user,
    ])
    
    if (user) {
        return <Layout />
    }

    return <AuthArea />
    
}