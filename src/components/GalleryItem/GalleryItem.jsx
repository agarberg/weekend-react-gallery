import axios from 'axios';
import { useState } from 'react';
import './GalleryItem.css'


function GalleryItem({item}) {
    // const showImage = item.path;
    // const showDescription = item.description;

    const [image, setDescription] = useState(true);
    const toggler = () => {
        console.log('in Toggler');
        setDescription(!image);
    }
    console.log(image)
    console.log(item)
    return (
        <>
    <div className="GalleryItem">
    <div className="PicDesc" onClick={toggler}>
        {image? <img src={item.path}/>:<p>{item.description}</p>}
    </div>
    <div className="Likes">
        <p>{item.likes} Likes</p>
        <button>Like Me!</button>
    </div>
    </div>
    </>
    )
}

export default GalleryItem;