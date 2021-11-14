import { getAuth,  signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const[authError, setAuthError] = useState(' ')
// gkshfgekj

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT')
            const destination  = location?.state?.from || '/';
            history.replace(destination);
            
            setAuthError('');
        }).catch((error) => {
            setAuthError(error.message);
        }).finally(() => setIsLoading(false));
    }





    const registerUser = (email, password, name, history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName : name};
            setUser(newUser);
             // save user to the database
             saveUser(email,name, 'POST')
            history.replace('/');
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));
    }

    const loginUser =(email, password, location, history) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination  = location?.state?.from || '/';
                history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }







    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
             setUser(user);
            } 
            else {
              setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribed;
    },[])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }


    const saveUser = (email, displayName, method) =>{
        const user ={email, displayName}
        fetch('http://localhost:5000/users', {
            method :  method,
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then()
    }





    return{
        user,
        signInGoogle,
        registerUser,
        loginUser,
        isLoading,
        logOut,
        authError,

    }
}
export default useFirebase;