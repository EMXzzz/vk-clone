import {
    Route, 
    Switch,
} from "react-router-dom";

import {
    FRIENDS_ID, 
    HOME, 
    MESSAGES, 
    MESSAGE_ID, 
    PROFILE_ID,
    SIGN_UP,
} from "../../helpers/routes";

import {Home} from "../../pages/home";

export const Content = () =>  (
    <Switch>
        <Route
            path={HOME}
            component={Home}
        /> 

        <Route
            path={PROFILE_ID}
            component={Home}
        />
        
        <Route
            path={MESSAGES}
            component={Home}
        />

        <Route
            path={MESSAGE_ID}
            component={Home}
        />

        <Route
            path={FRIENDS_ID}
            component={Home}
        />

        <Route
            path={SIGN_UP}
            component={Home}
        />
    </Switch>
)


