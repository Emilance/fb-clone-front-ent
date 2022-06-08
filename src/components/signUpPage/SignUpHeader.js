import React, { useContext } from 'react'
import { ImCross }  from 'react-icons/im'
import './SignUpHeader.css'
import { signUpContext } from '../loginPage/LoginPage'


const SignUpHeader = () => {
    const signUpClose = useContext(signUpContext)
    return ( 
        <div className='signUpHeader'>
                <div className='headerText'>
                    <h1>Sign Up</h1>
                    <p>It's quick and easy</p>
                </div>

                <div  onClick={signUpClose} className='closeIcon'>
                    <ImCross size='15'/>
                </div>

        </div>
     );
}
 
export default SignUpHeader;