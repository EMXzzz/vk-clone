import {Link} from "react-router-dom";

import {
    Avatar, 
    Box, 
    Card,
} from "@mui/material";

export const users = [
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
            variant='outlined'
            sx={{
                padding: 2,
                backgroundColor: '#F1F7FA',
                border: 'none',
                borderRadius: 3,
            }}>
            {users.map(user => 
            <Link 
                key={user._id}
                to={`profile_id${user._id}`} 
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
                        src={user.avatar}
                        alt="photo"
                        sx={{width:50, height: 50}}
                    />
                    {user.isInNetwork && 
                    <Box sx={{
                        backgroundColor: '#4FB14F', 
                        border: '2px solid #F1F7FA',
                        width: 13, 
                        height: 13, 
                        position: 'absolute', 
                        bottom: 2, 
                        left: 2,
                        borderRadius: '50%',
                    }}/>
                    }
                </Box>
                    
                <span>{user.name}</span>
            </Link>
            )}
        </Card>
    )
}