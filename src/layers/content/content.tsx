import {
    Route, 
    Switch,
} from "react-router-dom";

import {
    FRIENDS,
    FEED, 
    MESSAGES, 
    MESSAGE_ID, 
    PROFILE,
} from "../../helpers/routes";

import {Feed} from "../../pages/feed";
import {Friends} from "../../pages/friends";
import {Messages} from "../../pages/messages";
import {Profile} from "../../pages/profile";

export const Content = () =>  (
    <Switch>
        <Route
            path={FEED}
            component={Feed}
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
            component={Messages}
        />

        <Route
            path={FRIENDS}
            component={Friends}
        />
    </Switch>
)


