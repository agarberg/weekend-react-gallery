import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css'


function GalleryList({item, likeImage}) {
 console.log(item)
    return (
        <>
        {item.map(item => ( 
            <div key={item.id}>
            <GalleryItem item={item}
            likeImage={likeImage}/> 
            </div>
            ))}
        </>
        
    )
}


export default GalleryList;