import React from 'react';
import Card from './Card';
import Favorites from './Favorites';


function PhotosPage({photoCollection, setPhotoCollection, setCheckPhotoCollection}) {
    const [photoFavBox, setPhotoFavBox] = React.useState([])

    //checking whether a photo card is in the favorites section, and adding it there if it isn't
    const addPhoto = (photo) => {
        const photoInBox = photoFavBox.find((item) => {return (item.id === photo.id)});
        if (!photoInBox) {
            setPhotoFavBox([...photoFavBox, photo])
        }
    }

    return (
        <section className='cards-section'>
            <Card />
            <hr />
            <Favorites />
        </section>
    )
}

export default PhotosPage;