import {
    Switch, 
    Route,
} from "react-router-dom";

import {
    SIGN_IN, 
    SIGN_UP,
} from "../../helpers/routes";

import {SignIn} from "../../pages/auth/sign-in";
import {SignUp} from "../../pages/auth/sign-up";

export const AuthArea = () => (
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