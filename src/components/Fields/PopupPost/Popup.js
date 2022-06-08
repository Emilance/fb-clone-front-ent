import React, { useState } from 'react';
import PopUpFooter from './PopupFooter';
import PopUpHeader from './PopUpHeader';
import './PopUp.css'
import axios from  'axios'


const PopUp = () => {
    const [post,  setPost]= useState({
        postText: ""
    })

    
  const createPost = ()=>{
    axios.post("http://localhost:4000/posts", post).then(()=>{
        window.location.reload(false)
    }

    )
    
 }
    return ( 

        <div className='popUp'>
            <PopUpHeader
             username="Damilola"
            />
            
            <textarea className='textArea' placeholder='Whats on your mind ' type="text"  value={post.postText} onChange={(event)=> {
                setPost({ ...post, postText:event.target.value})
            }}></textarea>
            <PopUpFooter  createPost={createPost}/>
        </div>
     );
}
 
export default PopUp;