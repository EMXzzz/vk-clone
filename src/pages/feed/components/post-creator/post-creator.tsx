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

import {Post} from "../../types";

import {useAuth} from "../../../../layers/auth-provider/use-auth";

interface Props {
    onAdd: (post: Post) => void
}

export const PostCreator = ({onAdd}: Props) => {
    const [content, setContent] = useState<string>('')
    const {user} = useAuth()
    const handleAddPost = (event: KeyboardEvent<HTMLInputElement>) => { 
        if (event.key === 'Enter' && user) {
            const post = { //TODO заглушка
                author: user,
                content,
                createdAt: '5 минут назад'
            }

            onAdd(post)
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