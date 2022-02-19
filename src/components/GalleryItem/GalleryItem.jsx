import axios from 'axios';
import { useState } from 'react';
import App from '../App/App';
import './GalleryItem.css'


function GalleryItem({item}) {

    const likeImage = () => {
        console.log('like button clicked')
        axios.put('/gallery/like/:id')
            .then(response => {
                // getGallery();
                console.log('Your like was counted!');
            })
            .catch(err => {
                alert('Your like did not count')
              })
          }

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
        <button onClick={likeImage}>Like Me!</button>
    </div>
    </div>
    </>
    )
}

export default GalleryItem;