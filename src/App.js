
import './App.css';
import Fields from './components/Fields/Fields';
import PopUp from './components/Fields/PopupPost/Popup';
import Header from './components/header/Header';
import RightSideBar from './components/sidebar/RightSideBar';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className="App">
       <Header/>
       <div className='fields'>

       <SideBar/>
       <Fields/>
       <RightSideBar/>
       </div>
        {/* <div className='postPopUP'>

      <PopUp/>
        </div> */}
    </div>
  );
}

export default App;
