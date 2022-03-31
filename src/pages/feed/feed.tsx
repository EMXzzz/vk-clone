import {Box} from "@mui/material";

import {PostCreator} from "./components/post-creator";
import {Posts} from "./components/posts";

export const Feed = () => {
    return (
        <Box>
            <PostCreator />
            <Posts />
        </Box>
    )
}