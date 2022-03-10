import {
    useState, 
    SyntheticEvent, 
    ChangeEvent,
} from "react";

import {
    TextField, 
    ButtonGroup, 
    Button,
    Grid,
} from "@mui/material";

import {User} from "../auth";

import classes from './sign-up.module.css';

export const SignUp = () => {
    const [user, setUser] = useState<User | null>(null)

    const handleSumbit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (user) {
            console.log(user.email, user.password);
        }
    }

    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        if (user) {
            setUser({...user, email: event.target.value})
        }
    }

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        if (user) {
            setUser({...user, password: event.target.value})
        }
    }

    return (
        <Grid 
            display='flex' 
            justifyContent='center' 
            alignItems='center'
        >
            <form 
                className={classes['sign-up']}
                onSubmit={handleSumbit}
            >
                <TextField 
                    type='email' 
                    label='email' 
                    variant='outlined' 
                    value={user?.email} 
                    onChange={handleChangeEmail}
                    sx={{display: 'block', marginBottom: 3}}
                />   
                
                <TextField 
                    type='password' 
                    label='password' 
                    variant='outlined' 
                    value={user?.password} 
                    onChange={handleChangePassword}
                    sx={{display: 'block', marginBottom: 3}}
                />  

                <ButtonGroup variant="outlined">
                    <Button>Registration</Button>
                </ButtonGroup>
            </form> 
        </Grid> 
    )
}