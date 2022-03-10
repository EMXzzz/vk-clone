import {
    ChangeEvent, 
    SyntheticEvent, 
    useState,
} from "react";

import {
    Button, 
    ButtonGroup, 
    TextField,
} from "@mui/material";

import {useLoginUser} from "./use-login-user";

import {User} from "../auth";

import classes from "./sign-in.module.css";

export const SignIn = () => {
    const defaultUserData = {
        email: '',
        password: '',
    }

    const [user, setUser] = useState<User>(defaultUserData)

    const {loginUser} = useLoginUser()

    const handleSumbit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()

        void loginUser(user.email, user.password)

        setUser(defaultUserData)
    }

    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setUser({...user, email: event.target.value})
    }

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setUser({...user, password: event.target.value})
    }

    return (
        <form 
            className={classes["sign-in"]}
            onSubmit={handleSumbit}
        >
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
                    Login
                </Button>
            </ButtonGroup>
        </form>
    )
}