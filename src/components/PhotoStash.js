import React from 'react';
import Card from './Card';

function PhotoStash({addPhoto, photoCollection, dischargePhoto}) {
    return (
        <div>
            <h1 className='section-title' id='photo-collection'>Collection of all Photos</h1>
            <div className='cards-section'>
                
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
        </div>
    )
}

export default PhotoStash;
