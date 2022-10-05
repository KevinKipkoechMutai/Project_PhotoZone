import React from 'react';
import Card from './Card';
import Favorites from './Favorites';


function PhotosPage() {
    return (
        <section className='cards-section'>
            <Card />
            <hr />
            <Favorites />
        </section>
    )
}

export default PhotosPage;