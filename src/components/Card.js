import React from 'react'

function Card({photo, handlePhotos, dischargePhoto}) {
   
    // let displayBadge;
    // if (photos.stockNumber === 0) {
    //     displayBadge= "NOT AVAILABLE"
    // } else {
    //     displayBadge= "AVAILABLE"
    // }

    return (
        <div className='card'
            onClick={
                (e) => {
                    e.stopPropagation()
                    handlePhotos(photo)
                }
            }
        >
            {/*displayBadge && <div className='card-badge'>{displayBadge}</div>*/}
            <img src={photo.imgSrc} className="card-image" alt={photo.title}/>
            <h1 className='card-title'>{photo.title}</h1>
            <div className='card-statistics'>
                <p className='larger'>Rating: {photo.statistics.rating}</p>
                <span className='bold larger'>({photo.statistics.reviews} reviews)</span>
            </div>
            <p className='bold'>{photo.whereTaken}</p>
            
            <div className='buttons'>
                <button className='bold button'
                    onClick={(e) => {
                        e.stopPropagation()
                        dischargePhoto(photo)
                    } }
                >Delete</button>
                <button className='bold button'>Add to Favorites</button>
            </div>
        </div>
    )
}

export default Card;