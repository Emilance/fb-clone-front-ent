import React from 'react';
import './LoginPage.css'

const LoginPage = () => {
    return ( 
        <div className='loginPage'>
            <p className='trash'>No backend yet!!<a href="/home">  click Here to skip</a></p>
            <div className='titleCon'>
            <div className='pageTitle'>
                <h1>facebook</h1>
                <p className='pageSubtitle'>Facebook helps you connect and share with the people in your life</p>
            </div>
            </div>
            <div className='formContainer'>

            <form >
                <input type='text' placeholder='Email address or phone number'/>
                <input type="Email"  placeholder="Password"/>
                <input type='submit' className='loginSubmit' value="Log In"/>
                <a href='#' className='forgetpassword'>Forgotten Password?</a>

                <input type='submit' className='createAccountSubmit' value='Create New Account'/>
            </form>
            </div>

        </div>
     );
}
 
export default LoginPage;