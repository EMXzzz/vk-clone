import {useAuth} from "../../layers/auth-provider/use-auth";

import classes from "./profile.module.css"



export const Profile = () => {
    const {user} = useAuth()
    return (
        < >
            <div>
                <img 
                    className={classes["profile-avatar"]} 
                    src={user?.avatar} 
                    alt="" 
                />
            </div>
            <div>
                <h1>{user?.name}</h1>
            </div>

        </>
    )
}