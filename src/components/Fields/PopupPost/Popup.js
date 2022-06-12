import React, { useState } from 'react';
import PopUpFooter from './PopupFooter';
import PopUpHeader from './PopUpHeader';
import './PopUp.css'
import axios from  'axios'


const PopUp = () => {
    const [post,  setPost]= useState({
        postText: "",
        fileName:"",

    })
    const [previewIMG, setPreviewIMG]= useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")

    const {postText, fileName}  =post

    const onChangeFile =  async (e)=> {
        console.log(e.target.files[0])
       await setPost({ ...post,  fileName:e.target.files[0]})
       const  reader = new FileReader();
        reader.onload =() =>{
            if (reader.readyState === 2 ){
                setPreviewIMG(reader.result)
           }else{
              console.log("something is wrong")
         }
    }  
    reader.readAsDataURL(e.target.files[0])
      console.log(post)

}


const createPost = (e)=>{
    e.preventDefault();
    const formData = new FormData();
    
    formData.append("postText", postText);
    formData.append("postImage", fileName);

    axios.post("http://localhost:4000/posts", formData).then(()=>{
        window.location.reload(false)
    } ).catch(err =>{
        console.log(err.message)
    })
    
 }
    return ( 

        <div className='popUp'>
            <PopUpHeader
             username="Damilola"
            />
            <div   encType='multipart/form-data'>

            <textarea className='textArea' placeholder='Whats on your mind ' type="text"  value={post.postText} onChange={(event)=> {
                setPost({ ...post, postText:event.target.value})
            }}></textarea>
             <div className='imagePreviewCon'>
                 <img className='imgPreview' src={previewIMG}/>
             </div>

            
            <PopUpFooter onChangeFile={onChangeFile} createPost={createPost}/>
            </div>
        </div>
     );
}
 
export default PopUp;