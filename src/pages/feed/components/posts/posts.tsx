import {Link} from "react-router-dom";

import {
    Avatar, 
    Box,
    ImageList,
    ImageListItem,
} from "@mui/material";

import {PROFILE} from "../../../../helpers/routes";

import {Post} from "../../types";

import classes from "./posts.module.css";

interface Props {
    posts: Post[]
}

export const Posts = ({posts}: Props) => {
    return (
        <>
            {posts.map((post, index) => 
                <Box
                    className={classes['post']}
                    key={`Post${index}`}
                >
                    <Link 
                        className={classes['post-link']}
                        key={post.author._id}
                        to={`${PROFILE}/${post.author._id}`} 
                    >
                        <Box className={classes['post-avatar-container']}>
                            <Avatar 
                                className={classes['post-avatar']}
                                src={post.author.avatar}
                                alt="photo"
                            />
                            
                        </Box>

                        <div>
                            <div className={classes['post-author-name']}>
                                {post.author.name}
                            </div>

                            <div className={classes['post-created-at']}>
                                {post.createdAt}
                            </div>     
                        </div>   
                        
                    </Link>

                    <p>{post.content}</p>
                
                    {post.images && 0 < post.images.length && (
                        <ImageList 
                            variant="masonry" 
                            cols={3} 
                            gap={8}
                        >
                            {post.images.map((image, idx) => (
                                <ImageListItem key={idx}>
                                    <img
                                        src={image}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    )}
                </Box>
            )}
        </>
    )
}