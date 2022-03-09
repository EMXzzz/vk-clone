import {Link} from "react-router-dom";

import {
    Avatar, 
    Box,
    ImageList,
    ImageListItem,
} from "@mui/material";
import { Post } from "../../types/post";

interface Posts {
    posts: Post[]
}

export const Posts = ({posts}: Posts) => {

    return (
        <>
            {posts.map((post, index) => 
                <Box
                    sx={{
                        border: '1px solid #E2E2E2',
                        borderRadius: '10px',
                        padding: 2,
                        marginTop: 5,
                    }}
                    key={`Post${index}`}
                >
                    <Link 
                        key={post.author._id}
                        to={`profile_id${post.author._id}`} 
                        style={{
                            display: 'flex', 
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: '#111',
                            marginBottom: 12,
                        }}>
                        <Box sx={{
                                position: "relative", 
                                marginRight: 2,
                                borderRadius: "50%",
                                overflow: "hidden",
                                width: 50,
                                height: 50,
                            }}>
                            <Avatar 
                                src={post.author.avatar}
                                alt="photo"
                                sx={{width:50, height: 50}}
                            />
                            
                        </Box>
                        <div>
                            <div style={{fontSize: 14}}>{post.author.name}</div>
                            <div style={{fontSize: 14, opacity: '0.6'}}>{post.createdAt}</div>     
                        </div>   
                        
                    </Link>
                    <p>
                        {post.content}
                    </p>
                    {post?.images?.length &&(
                        <ImageList variant="masonry" cols={3} gap={8}>
                        {post.images.map(image => (
                            <ImageListItem key={image}>
                                <img
                                    src={image}
                                    alt={''}
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