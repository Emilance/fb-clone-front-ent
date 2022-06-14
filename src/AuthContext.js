import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


const AuthContext = createContext()
export const userContext = createContext()
export const idContext = createContext()
const AuthContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState("");
    const [id,  setId]  = useState("");
    const getLoggedIn = async()=> {
      const isLoggedIn = await axios.get("http://localhost:4000/api/user/loggedIn");
     setLoggedIn(isLoggedIn.data);

    }
    const getUserData = ()=>{
        axios.get(`http://localhost:4000/api/user/userInfo/${id}`).then((allUser) =>{
            setUser(allUser.data)
            console.log(allUser.data)
        })
    }
    
    console.log(id);
    useEffect(   ()=>{
    const    myfunc   =   async () =>{
        await  getUserData();
        await  getLoggedIn();

         }

         myfunc()
    }, [id])

    console.log(user)
    return (
        <AuthContext.Provider  value={{loggedIn, getLoggedIn}}>
            <userContext.Provider   value={ user }>
              <idContext.Provider value={ setId}>

                  {props.children}

              </idContext.Provider>
            </userContext.Provider>
        </AuthContext.Provider>
    )
}
 
export default AuthContext;
export {AuthContextProvider}