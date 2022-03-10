import {useHistory} from "react-router-dom";

import {People} from "@mui/icons-material";
import {
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText ,
} from "@mui/material";

import {FRIENDS} from "../../../../helpers/routes";

export const Friends = () => {
    const history = useHistory();

    const handleMoveToFriendsPage = () => {
        history.push(FRIENDS)
    }
    return (
        <List>
            <ListItem>
                <ListItemButton onClick={handleMoveToFriendsPage}> 
                    <ListItemIcon>
                        <People />
                    </ListItemIcon>
                    <ListItemText primary='Друзья'/>
                </ListItemButton>
            </ListItem>
        </List>
    )
}