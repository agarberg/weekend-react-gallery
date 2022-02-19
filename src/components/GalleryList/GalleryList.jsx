import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css'


function GalleryList({item}) {
 console.log(item)
    return (
        <> 
        <ul> 
        {item.map(item => ( 
            <li key={item.id}>
            <GalleryItem item ={item}/> 
            </li>))}
        </ul>
        </>
    )
}

// {item.path}{item.description}{item.likes}


export default GalleryList;