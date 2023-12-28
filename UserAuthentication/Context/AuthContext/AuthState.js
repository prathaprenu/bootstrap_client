import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import EncryptedStorage from "react-native-encrypted-storage";

const authState = (props) => {
    const [userToken, setUserToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    const onAuthentication = async (userToken) => {
        await EncryptedStorage.setItem('user-token', userToken);
        setUserToken(userToken);
        console.warn("user has been authenticated");
    }

    
    useEffect(() => {
        checkAuthenticationStatus()
    }, [])


    const checkAuthenticationStatus = async () => {
        try {
            const returnedToken = await EncryptedStorage.getItem('user-token'); 
            setUserToken(returnedToken);
        }
        catch (err) {
            console.warn(`Here's the error that occured while retrieving token: ${err}`);
        }
        setIsLoading(false);
    }

    const userSignout = async () => {
        try {
            await EncryptedStorage.removeItem('user-token');
            setUserToken(null);
            console.warn('User Signout Success');
        }
        catch (err) {
            console.warn(`Here's the error that occured while retrieving token: ${err}`);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                onAuthentication,
                userSignout,
                userToken,
                isLoading,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
};
export default authState;