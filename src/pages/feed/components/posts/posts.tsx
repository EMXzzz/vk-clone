import {
    useEffect, 
    useState,
} from "react";

import {Link} from "react-router-dom";

import {
    Avatar, 
    Box,
    ImageList,
    ImageListItem,
} from "@mui/material";

import {PROFILE} from "../../../../helpers/routes";

import {Post} from "../../types";

import {
    collection, 
    onSnapshot,
} from "firebase/firestore";

import {useAuth} from "../../../../layers/auth-provider/use-auth";

import classes from "./posts.module.css";


const initialPost: Post[] = [ //TODO MOCK
    {
        author: {
            _id: '45',
            avatar: 'https://i.pinimg.com/736x/6f/70/77/6f7077ec9c6ae134992954976c456cec.jpg',
            name: 'Феечка Винкс',
        },
        content: 'bla bla bla',
        createdAt: '5 минут назад',
        images: [
            'https://daily-med.com.ua/wp-content/uploads/2021/09/37e331b7a1b39f090b1249a069a513d3_xl.jpg',
            'https://uamt.com.ua/images/lechenie/turkey/detskiy-tserebralnyy-paralich.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLR6EAN9aFnOpz0u_R8rSpNHZhar6MAowzxw&usqp=CAU',
            'https://www.meme-arsenal.com/memes/fbf6964bc3b18703b5dadac83ab69022.jpg',
            'https://deti-indigo74.ru/upload/medialibrary/abb/abb3d04d50adc317777fe480098a5f5a.jpg',
        ]
    }
]


export const Posts = () => {
    const {db} = useAuth()
    const [posts, setPosts] = useState<Post[]>(initialPost)

    useEffect(() => {
        if (db) {
            const unsub = onSnapshot(collection(db, 'posts'), doc => {
                doc.forEach((d: any) => {
                    setPosts(prev => [...prev, d.data()])
                });
            })
            return () => {
                unsub()
            }
        }
    }, [])

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