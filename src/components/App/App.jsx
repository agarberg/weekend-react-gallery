import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() { 
//create empty array for gallery items
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    getGallery()}, []);

// pull gallery from backend and store in array
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
// function to update like count
const likeImage = (id) => {
  console.log('like button clicked')
  axios.put(`/gallery/like/${id}`)
      .then(response => {
        // call getGallery to refresh like count
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
      {/* send gallery to GalleryList component through props */}
      <GalleryList item={galleryItems}
      // pass likeimage function call to GalleryList component
      likeImage={likeImage}/>
    </div>
  </div>
    );
}

export default App;
