import React from 'react';
import Card from './Card';

function PhotoStash({addPhoto, photoCollection, dischargePhoto}) {
    return (
        <div>
            <h1>Collection of all Photos</h1>
            {
                photoCollection.map((photo) => {
                    return (
                        <Card 
                        handlePhotos={addPhoto}
                        dischargePhoto={dischargePhoto}
                        key={photo.id}
                        photo={photo}
                    />
                    )
                })
            }
        </div>
    )
}

export default PhotoStash;
