import React from 'react';
import Card from './Card';

function Favorites({photoFavBox, removePhoto, dischargePhoto}) {
    return (
        <div>
            <h1>My Favorites</h1>
            <div className='card-section'>
                {
                    photoFavBox.map((photo) => {
                        return (
                            <Card 
                                key={photo.id}
                                handlePhotos= {removePhoto}
                                dischargePhoto = {dischargePhoto}
                                photo = {photo}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Favorites;