import React from 'react'
import { Link } from 'react-router-dom';
import { UseGlobalContext } from '../context/Productcontext'
import Card from './Card';

const Featureproduct = () => {
    const { featureproducts } = UseGlobalContext();
    return (
        <div className='container featureproduct'>
            <h5 className='featureheading'>Our Featured Products</h5>
            <div className="productdata">
                {
                    featureproducts.map((element) => {
                        const { name, price, image, id } = element;
                        return (
                            <Link to={`/singleproduct/${id}`} key={id}>
                                <Card
                                    key={id}
                                    name={name}
                                    price={price}
                                    image={image}
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Featureproduct
