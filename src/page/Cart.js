import React from 'react'
import {Link} from 'react-router-dom'
import Cartcard from '../component/Cartcard';
import { useCartContext } from '../context/Cardcontext'

const Cart = () => {
    const { cart, clearcart } = useCartContext();
    if (cart.length == 0) {
        return (
            <div className="emptycart">
                <h5>Cart is Empty</h5>
            </div>
        )
    }
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
            <div className="cartshopping">
                <Link to="/">
                    <button type='button'>Continue Shopping</button>
                </Link>
                <button type='button' onClick={() => { clearcart() }}>Clear Cart</button>
            </div>
        </div>
    )
}

export default Cart
