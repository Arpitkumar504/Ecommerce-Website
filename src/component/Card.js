import React from 'react'
import FormatPrice from './Formatprice'

const Card = ({ name, price, image }) => {
    return (
        <div className='card'>
            <div className="image">
                <img src={image} alt="#" />
            </div>
            <div className="content">
                <h5>{name}</h5>
                <h5><FormatPrice price={price} /></h5>
            </div>
        </div>
    )
}

export default Card
