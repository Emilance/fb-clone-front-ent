import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'
import './HamBugger.css'


const HamBugger = () => {
    const {open, setOpen}  = useState(false)

     const toggleMenu = () =>{
        
        setOpen(true)
     }

    return ( 
        <div  onClick={toggleMenu}  className='hamBugger'>
            <FiMenu  size='27'/>
             
        </div>
     );
}
 
export default HamBugger;