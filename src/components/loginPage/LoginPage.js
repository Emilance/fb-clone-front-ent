import React, { useState } from 'react';
import SignUp from '../signUpPage/SignUp';
import './LoginPage.css'


 export const signUpContext =React.createContext();

const LoginPage = () => {
    const [ displaySignUp, setDisplaySignUp] = useState(false);
    const [user, setUser]  = useState({email: '',  password: ''})

 const openSignUp = (e)=> {
     e.preventDefault();
       setDisplaySignUp(!displaySignUp)
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
                <input type='submit' className='loginSubmit' value="Log In"/>
                <a href='#' className='forgetpassword'>Forgotten Password?</a>

                <input  onClick={openSignUp} type='submit' className='createAccountSubmit' value='Create New Account'/>
            </form>
            </div>

        </div>
     );
}
 
export default LoginPage;