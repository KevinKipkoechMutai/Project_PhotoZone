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
            <img src={props.item.imgSrc} className="card-image"/>
            <div className='card-statistics'>
                <p>Rating: {props.item.statistics.rating}</p>
                <span>({props.item.statistics.reviews} reviews)</span>
            </div>
            <p>{props.item.whereTaken}</p>
            <p className='card-title'>{props.item.title}</p>
        </div>
    )
}

export default Card;