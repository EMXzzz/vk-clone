import {
    Route, 
    Switch,
} from "react-router-dom";

import {
    FRIENDS,
    HOME, 
    MESSAGES, 
    MESSAGE_ID, 
    PROFILE, 
    PROFILE_ID,
    SIGN_UP,
} from "../../helpers/routes";

import {Home} from "../../pages/home";
import {Friends} from "../../pages/friends";
import {
    Conversation, 
    Messages,
} from "../../pages/messages";
import {Profile} from "../../pages/profile";

export const Content = () =>  (
    <Switch>
        <Route
            path={HOME}
            component={Home}
        /> 

        <Route
            path={PROFILE}
            component={Profile}
        />
        
        <Route
            path={MESSAGES}
            component={Messages}
        />

        <Route
            path={MESSAGE_ID}
            component={Conversation}
        />

        <Route
            path={FRIENDS}
            component={Friends}
        />

        <Route
            path={SIGN_UP}
            component={Home}
        />
    </Switch>
)


