import { useState } from 'react';
import './GalleryItem.css'
import GalleryList from '../GalleryList/GalleryList';

function GalleryItem({item, likeImage}) {

    const [image, setDescription] = useState(true);
    const toggler = () => {
        console.log('in Toggler');
        setDescription(!image);
    }

    return (
        <>
    <div className="GalleryItem">
    <div className="PicDesc" onClick={toggler}>
        {image? <img src={item.path}/>:<p>{item.description}</p>}
    </div>
    <div className="Likes">
        <p>{item.likes} Likes</p>
        <button onClick={() => likeImage(item.id)}>Like Me!</button>
    </div>
    </div>
    </>
    )
}

export default GalleryItem;