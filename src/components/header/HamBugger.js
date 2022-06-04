import React, { useState, useContext } from 'react';
import { FiMenu } from 'react-icons/fi'
import { ImCross }  from 'react-icons/im'
import './HamBugger.css'
import { UserContext, StateContext } from '../../Home'



const HamBugger = () => {
    const [crossIcon, setCrossIcon] = useState(false)
    const user = useContext(UserContext)
    const open = useContext(StateContext)
     const toggleMenu = () =>{
         user(!open)
         setCrossIcon(!crossIcon)
        
     }

    return ( 
        <div  onClick={toggleMenu}  className='hamBugger'>
        {!crossIcon ?
           <FiMenu  size='27'/>
           :
           <ImCross size='25'/>
        }   
         
        
             
        </div>
     );
}
 
export default HamBugger;