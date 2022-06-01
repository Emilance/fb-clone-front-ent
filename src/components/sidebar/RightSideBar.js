import React from 'react';
import SideBarRow from './SideBarRow';
import image from '../images/demo.png'
import image1 from '../images/demo2.png'
import image2 from '../images/demo3.png'
import image3 from '../images/demo4.png'
import { BiVideoPlus, BiSearch , BiDotsHorizontalRounded} from 'react-icons/bi'
import './RightSideBar.css'



const RightSideBar = () => {
    return ( 
        <div className='rightSideBar'>
            <div className='contactHeader'>
                <p>Contacts</p>
                <div className='contactHeadIconCOntainer'/>
                     <div className='icon'>
                         <BiVideoPlus  />
                     </div>
                     <div className='icon'>
                         <BiSearch  />
                     </div>
                     <div className='icon'>
                         <BiDotsHorizontalRounded  />
                     </div>
            </div>
            <SideBarRow image={image}
              title= "Damilola Daniel"
          />
          <SideBarRow image={image1}
              title= "John Smith"
          />
          <SideBarRow image={image2}
              title= "John Doe"
          />
          <SideBarRow image={image3}
              title= "Eli Samson"
          />
         
        </div>
     );
}
 
export default RightSideBar;