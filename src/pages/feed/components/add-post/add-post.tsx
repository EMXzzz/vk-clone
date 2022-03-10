import {
    ChangeEvent, 
    KeyboardEvent, 
    useState,
} from "react";

import {
    Box, 
    TextField,
} from "@mui/material";

import classes from './add-post.module.css'

import {users} from "../../../../widgets/sidebar/user-items";

import {Post} from "../../types";

interface Props {
    onAdd: (post: Post) => void
}

export const AddPost = ({onAdd}: Props) => {
    const [content, setContent] = useState<string>('')

    const handleAddPost = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const post = {
                author: users[0],
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
        <Box className={classes['add-post']} >
            <TextField 
                className={classes['input-post']}
                label="Расскажи что у тебя нового" 
                variant="outlined"
                onKeyPress={handleAddPost}
                onChange={handleChange}
                value={content}
            />
        </Box>
    )
}