import { useEffect } from "react";
import {
    Switch, 
    Route,
} from "react-router-dom";

import {
    SIGN_IN, 
    SIGN_UP,
} from "../../helpers/routes";

import {SignIn} from "../../pages/sign-in";
import {SignUp} from "../../pages/sign-up";

export const Authentication = () => {
        return(
            <Switch>
                <Route 
                    path={SIGN_IN} 
                    component={SignIn}
                />

                <Route
                    path={SIGN_UP}
                    component={SignUp} 
                />
            </Switch>
        )
}