import React from 'react'
import FormatPrice from './Formatprice'
import { Link } from 'react-router-dom';

const Card = ({ name, price, image, id }) => {
    return (
        <Link to={`/singleproduct/${id}`} key={id}>
            <div className='card'>
                <div className="image">
                    <img src={image} alt="#" />
                </div>
                <div className="content">
                    <h5>{name}</h5>
                    <h5><FormatPrice price={price} /></h5>
                </div>
            </div>
        </Link >
    )
}

export default Card
