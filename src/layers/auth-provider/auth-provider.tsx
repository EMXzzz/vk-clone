import {
    createContext,
    useEffect, 
    useState,
} from "react";

import {
    Auth, 
    getAuth, 
    onAuthStateChanged,
} from "firebase/auth";
import {
    Firestore, 
    getFirestore,
} from "firebase/firestore";

import {
    Author, 
    TypeSetState,
} from "../../pages/feed/types";

import {users} from "../../widgets/sidebar/user-items";

interface Context {
    user: Author | null
    setUser: TypeSetState<Author | null>
    auth: Auth | null
    db: Firestore | null
}

export const AuthContext = createContext<Context>({
    user: null,
    setUser: (value) => null,
    auth: null,
    db: null
})

interface Props {
    children: JSX.Element
}

export const AuthProvider = ({children}: Props) => {
    const [user, setUser] = useState<Author | null>(null)
    
    const auth = getAuth()
    const db = getFirestore()
    
    useEffect(() => {
        const unListen = onAuthStateChanged(auth, () => {   
            if (auth.currentUser?.displayName) {
                setUser({
                    _id: auth.currentUser?.uid,
                    avatar: users[1].avatar,
                    name: auth.currentUser?.displayName,
                })
            } else {
                setUser(null)
            }
        })

        return () => {
            unListen()
        }
    }, [])

    const values = {
        user, 
        setUser, 
        auth,
        db,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}