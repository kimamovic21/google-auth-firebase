import { useContext, createContext, useEffect, useState } from "react";
import {
     GoogleAuthProvider, 
     signInWithPopup, 
     signInWithRedirect,
     signOut,
     onAuthStateChanged 
} from "firebase/auth";
import {auth} from '../firebase';

// 1. dodajemo
const AuthContext = createContext()

// 2. dodajemo
export const AuthContextProvider = ({children}) => {

    // 6. dodajemo
    const [user, setUser] = useState({})

    // 4. dodajemo
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
        //signInWithRedirect(auth,provider)
    };

    // 7. dodajemo
    const logOut = () => {
        signOut(auth)
    }

    // 5. dodajemo
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('User', currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, [])
    

    return (
        <AuthContext.Provider value={{googleSignIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}; 

// 3. dodajemo
export const UserAuth = () => {
    return useContext(AuthContext)
}