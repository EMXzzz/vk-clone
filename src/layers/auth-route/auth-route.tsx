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

export const AuthRoute = () => {
    const isAuth = false // TODO: заглушка
    
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if (!isAuth) {
            const isUrlAuth = location.pathname !== SIGN_IN && location.pathname !== SIGN_UP

            if (isUrlAuth) {
                history.push(SIGN_UP)
            }
        }
    }, [
        location.pathname,
        isAuth,
    ])

    useEffect(() => {
        if (isAuth) {
            const isUrlNotAuth = location.pathname === SIGN_IN || location.pathname === SIGN_UP

            if (isUrlNotAuth) {
                history.push(FEED)
            }
        }
    }, [
        location.pathname,
        isAuth,
    ])
    
    if(isAuth) {
        return <Layout />
    }

    return <AuthArea />
    
}