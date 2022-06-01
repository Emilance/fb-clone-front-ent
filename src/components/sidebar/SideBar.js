import React from 'react';
import SideBarRow from './SideBarRow';
import image from '../images/demo.png'
import { FaUserFriends } from 'react-icons/fa'
import { MdOndemandVideo, MdGroups,MdStoreMallDirectory } from 'react-icons/md'
import {AiOutlineFieldTime } from 'react-icons/ai'
import { BsMegaphone }  from 'react-icons/bs'
import './SideBar.css'



const SideBar = () => {
    return ( 
        <div className='sideBar'>
            <SideBarRow image={image}
              title= "Damilola Daniel"
            />
            <SideBarRow  Icon={FaUserFriends}
               title ="Friends"
            />
            <SideBarRow  Icon={BsMegaphone}
               title ="Friends"
            />
            <SideBarRow  Icon={MdGroups}
               title ="Groups"
            />
             <SideBarRow  Icon={MdStoreMallDirectory}
               title ="Watch"
            />
             <SideBarRow  Icon={MdOndemandVideo}
               title ="Watch"
            />
             <SideBarRow  Icon={AiOutlineFieldTime}
               title ="Memories"
            />
        </div>
     );
}
 
export default SideBar;