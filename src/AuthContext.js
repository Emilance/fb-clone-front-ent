import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


const AuthContext = createContext()
export const userContext = createContext()
const AuthContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState([]);
    const getLoggedIn = async()=> {
      const isLoggedIn = await axios.get("http://localhost:4000/api/user/loggedIn");
     setLoggedIn(isLoggedIn.data);

    }
    const getUserData = ()=>{
        axios.get("http://localhost:4000/api/user/userInfo").then((allUser) =>{
            setUser(allUser.data)
        })
    }

    useEffect(()=>{
        getUserData();
        getLoggedIn();
    }, [])

    console.log(user)
    return (
        <AuthContext.Provider  value={{loggedIn, getLoggedIn}}>
            <userContext.Provider   value={{user, setUser}}>
            {props.children}
            </userContext.Provider>
        </AuthContext.Provider>
    )
}
 
export default AuthContext;
export {AuthContextProvider}