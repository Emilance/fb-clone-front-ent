import React from 'react';
import PostField from './PostField/PostField';
import StoryReels from './storyReels/StoryReels';

const Fields = () => {
    return ( 
        <div className='middleField'>
            <StoryReels/>
            <PostField/>
        </div>
     );
}
 
export default Fields;