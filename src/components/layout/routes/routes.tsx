import {
    BrowserRouter as Router, 
    Route,
} from "react-router-dom";

import {Widgets} from "..";
import {routes} from "./list";

export const Routes = () => {

    return (
        <Router>
            {routes.map(route => {
                if (route.auth && '!isAuth') {
                    return false
                }
                return (
                    <Route
                        path={route.path}
                        key={`route ${route.path}`}
                    >
                    <Widgets children={undefined} />
                    <route.components />
                    </Route>
                )
            })}
        </Router>
    )
}