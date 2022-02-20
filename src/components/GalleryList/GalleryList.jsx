import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css'


function GalleryList({item, likeImage}) {
 console.log(item)
    return (
        <> 
        <ul> 
        {item.map(item => ( 
            <li key={item.id}>
            <GalleryItem item={item}
            likeImage={likeImage}
            /> 
            </li>))}
        </ul>
        </>
    )
}


export default GalleryList;