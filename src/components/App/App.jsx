import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryList from '../GalleryList/GalleryList';

function App() { 

  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    getGallery()}, []);


  const getGallery = () => {
  console.log("in GET gallery function")
  axios.get('/gallery')
    .then(response => {
      console.log("GET Success!", response.data)
      setGalleryItems(response.data)
    })
    .catch(err => {
      alert("error getting gallery ;(")
    })
}
console.log(galleryItems);
    return (
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>
          Gallery Goes Here
        </p>
        <GalleryList item={galleryItems}/>
        <GalleryItem getGallery={getGallery}/>

      </div>
    );
}

export default App;
