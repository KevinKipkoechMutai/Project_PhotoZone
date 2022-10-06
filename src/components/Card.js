import React from 'react'

function Card({addPhoto, photoCollection, dischargePhoto}) {
    let displayBadge;
    if (photos.stockNumber === 0) {
        displayBadge= "NOT AVAILABLE"
    } else {
        displayBadge= "AVAILABLE"
    }

    return (
        <div className='card'>
            {displayBadge && <div className='card-badge'>{displayBadge}</div>}
            <img src={photos.imgSrc} className="card-image" alt={photos.title}/>
            <h1 className='card-title'>{photos.title}</h1>
            <div className='card-statistics'>
                <p className='larger'>Rating: {photos.statistics.rating}</p>
                <span className='bold larger'>({photos.statistics.reviews} reviews)</span>
            </div>
            <p className='bold'>{photos.whereTaken}</p>
            
            <div className='buttons'>
                <button className='bold button'>Delete</button>
                <button className='bold button'>Add to Favorites</button>
            </div>
        </div>
    )
}

export default Card;