import {
    getAuth, 
    signInWithEmailAndPassword,
} from "firebase/auth";

export const useLoginUser = () => {
    const loginUser = async (email: string, password: string) => {
        try {
            const auth = getAuth()

            await signInWithEmailAndPassword(
                auth, 
                email, 
                password
            )
        } catch (error) {
            console.error(error);
        }
    }

    return {
        loginUser
    }
}