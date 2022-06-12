import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp from '../signUpPage/SignUp';
import './LoginPage.css'

export const signUpContext =React.createContext();


const LoginPage = () => {
    const navigate = useNavigate()
    const [ displaySignUp, setDisplaySignUp] = useState(false);
    const [user, setUser]  = useState({email: '',  password: ''})
    const [error, setError] = useState("")

 const openSignUp = (e)=> {
     e.preventDefault();
       setDisplaySignUp(!displaySignUp)
 }
 const logIn = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/api/auth", user).then(()=>{
        navigate("./home");
        console.log("logIn succcessfully")

    }).catch((err)=> {
       setError(err.response.data)
    })
 }
    return ( 
        <div className='loginPage'>
            {displaySignUp  && 
            <signUpContext.Provider  value={openSignUp}>

                <SignUp /> 
            </signUpContext.Provider>
           }
            
            <p className='trash'>No backend yet!!<a href="/home">  click Here to skip</a></p>
            <div className='titleCon'>
            <div className='pageTitle'>
                <h1>facebook</h1>
                <p className='pageSubtitle'>Facebook helps you connect and share with the people in your life</p>
            </div>
            </div>
            <div className='formContainer'>

            <form >
                <input type='text'
                 placeholder='Email address or phone number'
                 value={user.email}
                 onChange={e => setUser({...user, email : e.target.value})}
                 />
                <input type="password" 
                 placeholder="Password" 
                 value={user.password}
                 onChange={e => setUser({...user, password : e.target.value})}
                 />
                <h5>{error.message}</h5>
                <input onClick={logIn} type='submit' className='loginSubmit' value="Log In"/>
                <a href='#' className='forgetpassword'>Forgotten Password?</a>
                <input  onClick={openSignUp} type='submit' className='createAccountSubmit' value='Create New Account'/>
            </form>
            </div>

        </div>
     );
}
 
export default LoginPage;