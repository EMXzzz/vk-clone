import {useHistory} from "react-router-dom";

import FeedIcon from '@mui/icons-material/Feed';

import {
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText ,
} from "@mui/material";

import {FEED} from "../../../../helpers/routes";

export const News = () => {
    const history = useHistory();

    const handleMoveToNewsPage = () => {
        history.push(FEED)
    }
    return (
        <List>
            <ListItem>
                <ListItemButton onClick={handleMoveToNewsPage}> 
                    <ListItemIcon>
                        <FeedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Новости'/>
                </ListItemButton>
            </ListItem>
        </List>
    )
}