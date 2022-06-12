import axios from 'axios';
import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { MonthsOfTheYear, year } from './DateOfBirthFields';
import './SignUpForm.css'

const DaysInAMonth = []
for(let x=1 ; x<= 31 ; x++){
     let dayNo =parseInt(x)
     DaysInAMonth.push(dayNo)
}
const initialUser = {firstName: '', surName: '', email: '', password: '',dayOfBirth: "", monthOfBirth:'', yearOfBirth: '', gender:"" }
const SignUpForm = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [user, setUser] = useState(initialUser)

    const submitSignUpForm = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/api/user", user).then(()=>{
            navigate("./home");
            console.log("post succcessfully")
        }).catch(err => {
            console.log(err.response.data)
            setError(err.response.data)
        })
    }  
    return ( 
        <div className='SignUpForm'>
            <form>
                <div className='inputContainer'>
                    <input type='text' placeholder='First name'
                      value={user.firstName}
                      onChange={e => setUser({ ...user, firstName: e.target.value})}
                    />
                    <input type='text' placeholder= 'Surname'
                      value={user.surName}
                      onChange={e => setUser({ ...user, surName: e.target.value})}
                    />
                </div>
                <input type='email' placeholder='Mobile number or email address'
                     value={user.email}
                     onChange={e => setUser({ ...user, email: e.target.value})}
                />
                <input type='password'  placeholder='New password' 
                    value={user.password}
                    onChange={e => setUser({ ...user, password: e.target.value})}
                />
                <label>Date  Of birth</label>
                <div className='inputContainer'>
                    <select name='dayOfBirth' onChange={e => setUser({  ...user, dayOfBirth: e.target.value})} id="dayOfBirth">
                        {DaysInAMonth.map((day, index)=>{
                            return(
                                
                                
                                  <option key={index} value={day}>{day}</option>
                              
                            )
                        })}
                    </select>
                    <select name='monthOfBirth' onChange={e => setUser({  ...user, monthOfBirth: e.target.value})} id="monthOfBirth">                      
                     {MonthsOfTheYear.map((month, index)=> {
                         return(
                            
                                 <option key={index}  value={month.month}>{month.shortName}</option>
                           
                         )
                     })}
                        
                    </select>
                    <select name='yearOfBirth'  onChange={e => setUser({  ...user, yearOfBirth: e.target.value})} id="yearOfBirth">
                        {year.map((Year, index)=>{
                            return(
                                          
                                <option  key={index} value={Year}>{Year}</option>
                              
                            )
                        })}
                    </select>
                </div>

                <div className='checkboxContainer'   onChange={e => setUser({  ...user, gender: e.target.value})}>
                
                         <input type='radio' name='gender' value='female'  id='female'/>
                        <label htmlFor='female'>Female</label>
                      
                         <input type='radio' name='gender' value='male' id='male'/>
                        <label htmlFor='male'>Male</label>

                   
                        <input type='radio' value='custom' name='gender' id='custom'/>
                        <label htmlFor='custom'>Custom</label>
                  
                </div>
                <p>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
                <p>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</p>
                <h5>{error.message}</h5>
                 <input onClick={submitSignUpForm} type='submit' value='Sign Up'/>
            </form>
        </div>
     );
}
 
export default SignUpForm;