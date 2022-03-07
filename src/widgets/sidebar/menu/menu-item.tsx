import {useHistory} from "react-router-dom";

import {QuestionAnswer} from "@mui/icons-material";
import {
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText ,
} from "@mui/material";

import {MESSAGES} from "../../../helpers/routes";

export const MenuItem = () => {
    const history = useHistory();

    const handleMoveToMessagesPage = () => {
        history.push(MESSAGES)
    }

    return (
        <List>
            <ListItem>
                <ListItemButton onClick={handleMoveToMessagesPage}> 
                    <ListItemIcon>
                        <QuestionAnswer />
                    </ListItemIcon>
                    <ListItemText primary='Сообщения'/>
                </ListItemButton>
            </ListItem>
        </List>
    )
}