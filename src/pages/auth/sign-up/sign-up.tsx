import {
    useState, 
    SyntheticEvent, 
    ChangeEvent,
} from "react";

import {
    TextField, 
    ButtonGroup, 
    Button,
} from "@mui/material";

import {useCreateUser} from "./use-create-user";

import {User} from "../auth";

import classes from './sign-up.module.css';

export const SignUp = () => {
    const defaultUserData = {
        name: '',
        email: '',
        password: '',
    }

    const [user, setUser] = useState<User>(defaultUserData)

    const {createUser} = useCreateUser()

    const handleSumbit = async (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()

        void createUser(user.name, user.email, user.password)

        setUser(defaultUserData)
    }

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setUser({...user, name: event.target.value})
    }
    
    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setUser({...user, email: event.target.value})
    }

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setUser({...user, password: event.target.value})
    }

    return (
        <form 
            className={classes['sign-up']}
            onSubmit={handleSumbit}
        >
            <TextField 
                type='text' 
                label='Name & Lastname' 
                variant='outlined' 
                value={user.name} 
                onChange={handleChangeName}
                sx={{marginBottom: 3}}
            /> 

            <TextField 
                type='email' 
                label='email' 
                variant='outlined' 
                value={user.email} 
                onChange={handleChangeEmail}
                sx={{marginBottom: 3}}
            />   
            
            <TextField 
                type='password' 
                label='password' 
                variant='outlined' 
                value={user.password} 
                onChange={handleChangePassword}
                sx={{marginBottom: 3}}
            />  

            <ButtonGroup variant="outlined">
                <Button 
                    type="submit"
                    disabled={!user.email && !user.password}
                >
                    Registration
                </Button>
            </ButtonGroup>
        </form>  
    )
}