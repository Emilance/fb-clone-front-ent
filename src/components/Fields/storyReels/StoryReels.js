import React from 'react';
import Stories from './Stories';
import image from '../../images/demo.png'
import image2 from '../../images/demo2.png'
import image3 from '../../images/demo3.png'
import image4 from '../../images/demo4.png'
import './StoryReels.css'

const Images = [
    {src : image, name: 'Alabi Damilola'},
    {src : image2, name: 'John Smith'},
    {src: image3, name:'John doe'},
    {src: image4, name:'Eli Samson'}
]
const StoryReels = () => {
    return ( 
        <div   className='storyReels'>
          <div className='storyReelsButton'>
              <p>Stories</p>
              <p>Reels</p>
          </div>
          <div className='story'>

          {Images.map((img)=>{
              return(
                <Stories  image={img.src}
                ProfileName={img.name}
              />
              )
          })}
          </div>
           
        </div>
     );
}
 
export default StoryReels;