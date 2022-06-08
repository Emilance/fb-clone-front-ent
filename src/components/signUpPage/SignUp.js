import React from 'react';
import SignUpForm from './SignUpForm';
import SignUpHeader from './SignUpHeader';
import './SignUp.css'


const SignUp = () => {
    return ( 
        <div className='signUp'>
            <div className='createAccount'>

            <SignUpHeader/>
            <SignUpForm/>
            </div>
        </div>
     );
}
 
export default SignUp;