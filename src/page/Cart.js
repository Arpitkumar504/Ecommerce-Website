import React from 'react'
import Cartcard from '../component/Cartcard';
import { useCartContext } from '../context/Cardcontext'

const Cart = () => {
    const { cart } = useCartContext();
    return (
        <div className='container cart'>
            <div className="heading">
                <h5>ITEM</h5>
                <h5>PRICE</h5>
                <h5>QUANTITY</h5>
                <h5>SUBTOTAL</h5>
                <h5>REMOVE</h5>
            </div>
            <hr />
            <div className="cartdata">
                {
                    cart.map((element, index) => {
                        return (
                            <Cartcard
                                key={element.id}
                                {...element}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart
