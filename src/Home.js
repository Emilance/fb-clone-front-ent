import React, {useState} from 'react';
import './App.css';
import Fields from './components/Fields/Fields';
import PopUp from './components/Fields/PopupPost/Popup';
import Header from './components/header/Header';
import LoginPage from './components/loginPage/LoginPage';
import RightSideBar from './components/sidebar/RightSideBar';
import SideBar from './components/sidebar/SideBar';

export const UserContext = React.createContext();
export const StateContext = React.createContext();
export const PostContext = React.createContext();
export const OpenPostContext= React.createContext();


function Home() {
 
    const [open, setOpen]  = useState(true);
    const [openPost, setOpenPost] =useState(false);

    
  return (
    <div className="App">
    <UserContext.Provider  value={setOpen}>
      <StateContext.Provider value={open}>

       <Header/>
      </StateContext.Provider>
      </UserContext.Provider>

      {open ? 
        <div className='fields'>
          <div className='menu'>           
        <SideBar/>
        </div>
        <OpenPostContext.Provider value={setOpenPost}>
          <PostContext.Provider value={openPost}>
        <Fields/>
          </PostContext.Provider>
        </OpenPostContext.Provider>
        <RightSideBar/>
        </div>
        :
        <SideBar/>
    }
      
        {openPost?
        <div className='postPopUP'>
            <OpenPostContext.Provider value={setOpenPost}>
          <PostContext.Provider value={openPost}>
             <PopUp/>
           </PostContext.Provider>
        </OpenPostContext.Provider>
        </div> 
        :
        null
        } 
    </div>
  );
}

export default Home;
