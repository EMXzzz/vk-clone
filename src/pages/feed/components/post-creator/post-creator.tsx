import {
    ChangeEvent, 
    KeyboardEvent, 
    useState,
} from "react";

import {
    Box, 
    TextField,
} from "@mui/material";

import classes from './post-creator.module.css';

import {useAuth} from "../../../../layers/auth-provider/use-auth";
import {
    addDoc, 
    collection,
} from "firebase/firestore";

export const PostCreator = () => {
    const [content, setContent] = useState<string>('')
    const {user, db} = useAuth()
    const handleAddPost = async (event: KeyboardEvent<HTMLInputElement>) => { 
        if (event.key === 'Enter' && user) {
            
            try {
                if (db) {
                    await addDoc(collection(db, 'posts'), {
                        author: user,
                        content,
                        createdAt: '5 минут назад',
                   })
                }
            } catch (error) {
                console.log(error); 
            }
            
            setContent('')
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value)
    }

    return (
        <Box className={classes['post-creator-container']} >
            <TextField 
                className={classes['post-creator']}
                label="Расскажи что у тебя нового" 
                variant="outlined"
                onKeyPress={handleAddPost}
                onChange={handleChange}
                value={content}
            />
        </Box>
    )
}