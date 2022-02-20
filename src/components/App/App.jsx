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

const likeImage = (id) => {
  console.log('like button clicked')
  axios.put(`/gallery/like/${id}`)
      .then(response => {
          getGallery();
          console.log('Your like was counted!');
      })
      .catch(err => {
          alert('Your like did not count :(')
        })
    }


console.log(galleryItems);
    return (
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Dogs</h1>
        </header>
        <div className="gallery">
        <GalleryList item={galleryItems}
         likeImage={likeImage}/>
         </div>
      </div>
    );
}

export default App;
