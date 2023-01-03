import React from 'react'
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
                            <Card
                                key={id}
                                id={id}
                                name={name}
                                price={price}
                                image={image}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Featureproduct
