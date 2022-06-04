import React from 'react';
import PopUpFooter from './PopupFooter';
import PopUpHeader from './PopUpHeader';
import './PopUp.css'


const PopUp = () => {
    return ( 

        <div className='popUp'>
            <PopUpHeader
             username="Damilola"
            />
            <textarea className='textArea' placeholder='Whats on your mind ' type="text" ></textarea>
            <PopUpFooter/>
        </div>
     );
}
 
export default PopUp;