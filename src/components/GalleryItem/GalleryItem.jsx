import axios from 'axios';
import { useState, useEffect } from 'react';

import './GalleryItem.css'

function GalleryItem ({galleryItems}) {
    return (
        <>
    <div>
        <img src={galleryItems.path} alt={galleryItems.path} />
        <p>{galleryItems.description}</p>
    </div>
    <div>
        <p>{galleryItems.likes}</p>
        <button>Like This</button>
    </div>
    </>
    )
}

export default GalleryItem;