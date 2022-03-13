import {
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import {useAuth} from '../../../layers/auth-provider/use-auth';
import {users} from '../../../widgets/sidebar/user-items';

export const useCreateUser = () => {
    const {
        auth,
        setUser,
    } = useAuth()

    const createUser = async (name: string, email: string, password: string) => {
        try {
            if (auth) {
                const response = await createUserWithEmailAndPassword(
                    auth, 
                    email, 
                    password
                )
                
                await updateProfile(response.user, {
                    displayName: name
                })

                setUser({
                    _id: response.user.uid,
                    avatar: users[1].avatar, 
                    name,
                })
            }

        } catch (error) {
            console.error(error);
        }
    }

    return {
        createUser
    }
}