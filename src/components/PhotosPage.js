import React from 'react';
//import Card from './Card';
import Favorites from './Favorites';
import PhotoStash from './PhotoStash';


function PhotosPage({photoCollection, setPhotoCollection, setCheckPhotoCollection}) {
    const [photoFavBox, setPhotoFavBox] = React.useState([])

    //checking whether a photo card is in the favorites section, and adding it there if it isn't
    const addPhoto = (photo) => {
        const photoInBox = photoFavBox.find((item) => {return (item.id === photo.id)});
        if (!photoInBox) {
            setPhotoFavBox([...photoFavBox, photo])
        }
    }

    //removing a photo from the DOM
    const removePhoto = (photo) => {
        const photoInBox = photoFavBox.find(item => {return item.id === photo.id});
        if (photoInBox) {
            setPhotoFavBox(photoFavBox.filter(removedPhoto => removedPhoto.id !== photo.id))
        }
    }

    //deleting a photo from the API
    const dischargePhoto = (photo) => {
        setPhotoCollection(photoCollection.filter(item => item.id !== photo.id));
        removePhoto(photo)
        fetch(`https://my-json-server.typicode.com/KevinKipkoechMutai/PhotoZone_Backend/photos/${photo.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        },);
        setCheckPhotoCollection(true)
    }

    return (
        <section>
            
            <PhotoStash 
                photoCollection = {photoCollection}
                addPhoto = {addPhoto}
                dischargePhoto = {dischargePhoto}
            />
            
            <hr />
            
            <Favorites 
                photoFavBox = {photoFavBox}
                removePhoto = {removePhoto}
                dischargePhoto = {dischargePhoto}
            />
            
            
        </section>
    )
}

export default PhotosPage;