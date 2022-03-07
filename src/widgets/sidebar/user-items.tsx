import { Avatar, Box, Card } from "@mui/material"
import { Link } from "react-router-dom"

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
            <Box 
                sx={{
                    display: "flex", 
                    alignItems: "center",
                }}>
                <Link 
                    to={"/profile"} 
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
                            src="https://penzavzglyad.ru/images/uploads/2021/03/11/88db2b6320f164d39b27d80aac3b6551.jpg" 
                            alt="photo"
                            sx={{width:50, height: 50}}
                        />
                    </Box>
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
                    <span>Иванов Иван</span>
                </Link>
            </Box> 
        </Card>
    )
}