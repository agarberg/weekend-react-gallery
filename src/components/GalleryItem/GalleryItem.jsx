import { useState } from 'react';
import './GalleryItem.css'
//passing in item object and likeImage function
function GalleryItem({item, likeImage}) {
    //set constant and default to true 
    const [image, setDescription] = useState(true);
    const toggler = () => {
        console.log('in Toggler');
        //set image to whatever state it isn't
        setDescription(!image);
    }

    return (
        <>
    <div className="GalleryItem">
    <div className="PicDesc" onClick={toggler}>
        {/* ternary conditional to flip between p / img */}
        {image? <img src={item.path}/>:<p>{item.description}</p>}
    </div>
    {/* display likes and like button on DOM */}
    <div className="Likes">
        <button onClick={() => likeImage(item.id)}>Like Me!</button>
        <p>{item.likes} Likes</p>
    </div>
    </div>
    </>
    )
}

export default GalleryItem;