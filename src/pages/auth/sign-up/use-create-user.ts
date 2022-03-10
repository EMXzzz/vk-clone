import {
    getAuth, 
    createUserWithEmailAndPassword,
} from 'firebase/auth';

export const useCreateUser = () => {
    const createUser = async (email: string, password: string) => {
        try {
            const auth = getAuth()

            await createUserWithEmailAndPassword(
                auth, 
                email, 
                password
            )
        } catch (error) {
            console.error(error);
        }
    }

    return {
        createUser
    }
}