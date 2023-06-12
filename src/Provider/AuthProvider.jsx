import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Config/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";


// TODO  createContext(null) k createContext() korte hbe
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        });
    };
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // setLoading(false);
            if (currentUser?.email) {
                axios.post('https://rhythm-fusion-server.vercel.app/jwt', { email: currentUser?.email })
                    .then(data => {
                        console.log(data.data.token);
                        localStorage.setItem("access-token", data.data.token);
                        setLoading(false);
                    })
            }
            else {
                setLoading(false);
                localStorage.removeItem("access-token");
            }

        });
        return () => {
           return  unsubscribe();
        }
    }, [])

    const authInfo = { user, createUser, loginUser, updateUserProfile, googleSignIn, logOut, loading };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;