import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css'

//loop through "item" prop that was sent 
// from app.jsx and send to GalleryItem. 
//pass through likeImage function to GalleryItem
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