import {Box} from "@mui/material";
import { useState } from "react";
import { Post } from "../../types/post";
import {AddPost} from "./add-post";
import { Posts } from "./posts";

export const Home = () => {

    const [posts, setPosts] = useState<Post[]>([
        {
            author: {
                _id: '45',
                avatar: 'https://i.pinimg.com/736x/6f/70/77/6f7077ec9c6ae134992954976c456cec.jpg',
                name: 'Феечка Винкс',
            },
            content: 'Ya ebal menya sosali',
            createdAt: '5 минут назад',
            images: [
                'https://daily-med.com.ua/wp-content/uploads/2021/09/37e331b7a1b39f090b1249a069a513d3_xl.jpg',
                'https://uamt.com.ua/images/lechenie/turkey/detskiy-tserebralnyy-paralich.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLR6EAN9aFnOpz0u_R8rSpNHZhar6MAowzxw&usqp=CAU',
                'https://www.meme-arsenal.com/memes/fbf6964bc3b18703b5dadac83ab69022.jpg',
                'https://deti-indigo74.ru/upload/medialibrary/abb/abb3d04d50adc317777fe480098a5f5a.jpg',
            ]
        }
    ])
    
    return (
        <Box>
            <AddPost setPosts={setPosts} />
            <Posts posts={posts}/>
        </Box>
    )
}