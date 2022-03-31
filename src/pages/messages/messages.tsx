import {
    useEffect, 
    useState,
    MouseEvent,
    ChangeEvent,
} from "react";

import {
    addDoc,
    collection, 
    onSnapshot,
} from "firebase/firestore";

import {
    Avatar,
    Divider, 
    Fab, 
    Grid, 
    List, 
    ListItem, 
    ListItemText, 
    TextField,
} from "@mui/material";

import SendIcon from '@mui/icons-material/Send';

import classes from './messages.module.css';

import {useAuth} from "../../layers/auth-provider/use-auth";
import {Message} from "./types";

export const Messages = () => {
    const {db, user} = useAuth()
    const [messages, setMessages] = useState<Message[]>([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (db) {
            const unsub = onSnapshot(collection(db, 'messages'), doc => {
                const arr: Message[] = []
                doc.forEach((d: any) => {
                    arr.push(d.data())
                })
                setMessages(arr)
            })
            return () => {
                unsub()
            }
        }
        
    }, [])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }

    const handleAddMessage = async (event: MouseEvent<HTMLButtonElement>) => {   
        try {
            if (db) {
                await addDoc(collection(db, 'message'), {
                    user, message
                })  
            }
        } catch (error) {
            console.log(error); 
        }
        setMessage('')
    }

    return (
        <>
            <List className={classes['message-area']}>
                {messages.map((msg, idx) => (
                <ListItem key={idx}>
                    <Grid 
                        container 
                        sx={msg.user._id === user?._id ? {textAlign: 'right'}: {}} 
                    >
                        <Grid 
                            display='flex'
                            justifyContent={msg.user._id === user?._id ? 'flex-end' : 'flex-start'}
                            item xs={12}
                        >
                            <Avatar src={msg.user.avatar} />
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText 
                                style={msg.user._id === user?._id ? {color: '#1976d2'} : {}}
                                primary={msg.message}>
                            </ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText secondary={msg.user.name}></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>
                ))}
            </List>
            <Divider />
            <Grid container style={{padding: '20px'}}>
                <Grid item xs={11}>
                    <TextField 
                        id="outlined-basic-email" 
                        label="Type Something" 
                        fullWidth
                        onChange={handleChange}
                        value={message}
                    />
                </Grid>
                <Grid item xs={1} alignItems="right">
                    <Fab color="primary" onClick={handleAddMessage}>
                        <SendIcon />
                    </Fab>
                </Grid>
            </Grid>
        </>
    )
}