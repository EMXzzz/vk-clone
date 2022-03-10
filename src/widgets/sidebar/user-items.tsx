import {Link} from "react-router-dom";

import {
    Avatar, 
    Box, 
    Card,
} from "@mui/material";

import classes from './sidebar.module.css';

import {PROFILE} from "../../helpers/routes";

export const users: any[] = [ //TODO MOCK
    {
        avatar: 'https://penzavzglyad.ru/images/uploads/2021/03/11/88db2b6320f164d39b27d80aac3b6551.jpg',
        name: 'Иванов Иван',
        isInNetwork: true,
        _id: '1',
    },
    {
        avatar: 'https://44.img.avito.st/640x480/8473503944.jpg',
        name: 'Zaglotus Vyaliy',
        isInNetwork: false,
        _id: '2',
    },
    {
        avatar: 'https://fun24.org/wp-content/uploads/2021/10/fun24.org-2021-10-30_20-41-34_782384.jpg',
        name: 'Cum Blaster',
        isInNetwork: true,
        _id: '3',
    }
]

export const UserItems = () => {
    return (
        <Card 
            className={classes['user-card']}
            variant='outlined'
        >
            {users.map(user => 
                <Link 
                    className={classes['user-link']}
                    key={user._id}
                    to={`${PROFILE}/${user._id}`} 
                >
                    <Box className={classes['user-avatar-container']}>
                        <Avatar 
                            className={classes['user-avatar']}
                            src={user.avatar}
                            alt="photo"
                        />
                        
                        {user.isInNetwork && <Box className={classes['user-is-in-network']}/>}
                    </Box>   
                    <span>{user.name}</span>
                </Link>
            )}
        </Card>
    )
}