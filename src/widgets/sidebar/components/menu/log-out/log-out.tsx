import {
    Avatar, 
    Button, 
    Card, 
    Chip,
} from "@mui/material";
import {useAuth} from "../../../../../layers/auth-provider/use-auth";
import classes from './styles.module.css';

import {signOut} from 'firebase/auth';

export const LogOut = () => {
    const {
        user, 
        auth,
    } = useAuth()

    const handleLogOut = () => {
        if (auth) {
            signOut(auth)
        }
    }

    return (
        <Card
            className={classes['log-out-card']}
            variant="outlined"
        >
            <Chip
                avatar={<Avatar src={user?.avatar} />}
                label={user?.name || 'Anonymous'}
                variant="outlined"
            />
            <Button
                variant="outlined"
                onClick={handleLogOut}
            >
                Выйти
            </Button>
        </Card>
    )
}