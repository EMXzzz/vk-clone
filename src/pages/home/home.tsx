import {Box} from "@mui/material";
import {useState} from "react";
import {Post} from "../../types/post";
import {AddPost} from "./add-post";
import {initialPost} from "./initial-post";
import {Posts} from "./posts";

export const Home = () => {

    const [posts, setPosts] = useState<Post[]>(initialPost)
    
    return (
        <Box>
            <AddPost setPosts={setPosts} />
            <Posts posts={posts}/>
        </Box>
    )
}