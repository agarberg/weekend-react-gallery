import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css'


function RenderGallery({galleryItems}) {

    return (
        <div class="gallery"> 
        {galleryItems.map => (
            <li key={galleryItems.id}> 
            <GalleryItem galleryItems={galleryItems} />
            </li>
        )}
        </div>
    )
}








export default GalleryList;