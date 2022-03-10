import {useHistory} from "react-router-dom";

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText ,
} from "@mui/material";

import {PROFILE} from "../../../../helpers/routes";

export const Profile = () => {
    const history = useHistory();

    const handleMoveToProfilePage = () => {
        history.push(PROFILE)
    }
    return (
        <List>
            <ListItem>
                <ListItemButton onClick={handleMoveToProfilePage}> 
                    <ListItemIcon>
                        <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary='Моя страница'/>
                </ListItemButton>
            </ListItem>
        </List>
    )
}