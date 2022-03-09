import {ChangeEvent, KeyboardEvent, useState} from "react";

import {
    Box, 
    TextField,
} from "@mui/material";

import {
    Post,
    TypeSetState,
} from "../../types/post";

import { users } from "../../widgets/sidebar/user-items";

interface AddPost {
    setPosts: TypeSetState<Post[]>
}

export const AddPost = ({setPosts}: AddPost) => {

    const [content, setContent] = useState<string>('')

    const handleAddPost = (event: KeyboardEvent<HTMLInputElement>) => {

        if (event.key === 'Enter')
        {setPosts(prev => [ 
            {
                author: users[0],
                content,
                createdAt: '5 минут назад'
            },
            ...prev
        ])
        setContent('')
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value)
    }

    return (
        <Box sx={{
            border: '1px solid #E2E2E2',
            borderRadius: '10px',
            padding: 2,
        }} >
            <TextField 
                label="Расскажи что у тебя нового" 
                variant="outlined"
                inputProps={{
                    sx: {
                        backgroundColor: '#F8F8F8',
                    }
                }} 
                sx={{
                    width: '100%'
                }}
                onKeyPress={handleAddPost}
                onChange={handleChange}
                value={content}
            />
        </Box>
    )
}