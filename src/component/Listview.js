import React from 'react'
import { Link } from 'react-router-dom'
import FormatPrice from './Formatprice';

const Listview = ({ product }) => {
    return (
        <div className='productlist'>
            {
                product.map((element, index) => {
                    const { name, image, description, price, id } = element;
                    return (
                        <Link to={`/singleproduct/${id}`} key={id}>
                            <div className="list">
                                <div className="image">
                                    <img src={image} alt="#" />
                                </div>
                                <div className="content">
                                    <h5>{name}</h5>
                                    <h5><FormatPrice price={price} /></h5>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Listview
