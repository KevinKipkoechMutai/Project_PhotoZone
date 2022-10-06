import React from 'react'

function Card({photo, handlePhotos, dischargePhoto}) {
   
    let displayBadge;
    if (photo.stockNumber === 0) {
        displayBadge= "NOT AVAILABLE"
    } else {
        displayBadge= "AVAILABLE"
    }

    function handleClickFav(e) {
        e.stopPropagation();
        handlePhotos(photo)
    }

    return (
        <div className='card'>
            {displayBadge && <div className='card-badge'>{displayBadge}</div>}
            <img src={photo.imgSrc} className="card-image" alt={photo.title}/>
            <h1 className='card-title intext'>{photo.title}</h1>
            <div className='card-statistics'>
                <p className='larger intext'>Rating: {photo.statistics.rating}</p>
                <span className='bold larger intext'>({photo.statistics.reviews} reviews)</span>
            </div>
            <p className='bold intext'>{photo.whereTaken}</p>
            
            <div className='buttons'>
                <button className='bold button'
                    onClick={(e) => {
                        e.stopPropagation()
                        dischargePhoto(photo)
                    } }
                >Delete</button>
                <button className='bold button' onClick={handleClickFav}>Add to Favorites</button>
            </div>
        </div>
    )
}

export default Card;