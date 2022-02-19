import axios from 'axios';
import { useState, useEffect } from 'react';
import './GalleryItem.css'


function GalleryItem({item}) {
console.log(item)
    return (
        <>


    <div>
        <img src={item.path} />
        <p>{item.description}</p>
    </div>
    <div>
        <p>{item.likes} Likes</p>
        <button>Like Me!</button>
    </div>
    </>
    )
}

export default GalleryItem;