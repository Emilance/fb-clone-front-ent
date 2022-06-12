import React, { useEffect, useState } from 'react';
import PostHeader from './PostHeader';
import image from '../../images/demo3.png'
import PostBody from './PostBody';
import image2 from '../../images/post.png'
import './Post.css'
import CommentAndLikes from './CommentAndLikes';
import axios from 'axios';




const Post = () => {
    const [allPost, setAllPost] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:4000/posts").then(allPosts => {      
        setAllPost(allPosts.data)
        }).catch(err => console.log(err))
    }, [])
    
    return ( 
        <>
        

             {allPost.map((post, index)=>{
                 return(
                    <div key={index} className='post'>
                    <PostHeader
                        username='Damilola'
                        timeStamp= {post.time}
                        image={image}
                        post= {post}
                    />
                    
                    <PostBody
                        PostText={post.postText}
                         PostPicture={post.postImage} 
                     />
                     <CommentAndLikes/>
                     </div>
                 )
             })}
        </>
     );
}
 
export default Post;