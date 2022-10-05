import React from 'react'

function Card(props) {
    let displayBadge;
    if (props.item.stockNumber === 0) {
        displayBadge= "NOT AVAILABLE"
    } else {
        displayBadge= "AVAILABLE"
    }

    return (
        <div className='card'>
            {displayBadge && <div className='card-badge'>{displayBadge}</div>}
            <img src={props.item.imgSrc} className="card-image" alt={props.item.title}/>
            <h1 className='card-title'>{props.item.title}</h1>
            <div className='card-statistics'>
                <p className='larger'>Rating: {props.item.statistics.rating}</p>
                <span className='bold larger'>({props.item.statistics.reviews} reviews)</span>
            </div>
            <p className='bold'>{props.item.whereTaken}</p>
            
            <div className='buttons'>
                <button className='bold button'>Purchase</button>
                <button className='bold button'>Add to Favorites</button>
            </div>
        </div>
    )
}

export default Card;