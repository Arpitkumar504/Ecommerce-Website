import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useCartContext } from '../context/Cardcontext'
import Cardamount from './Cardamount'
import FormatPrice from './Formatprice'

const Cartcard = ({ id, color, amount, image, max, name, price }) => {
    const { removeitem, setDecrease, setIncrease } = useCartContext();
    return (
        <div className="cartcard container">
            <div className="cartitem">
                <div className="image">
                    <img src={image} alt="#" />
                </div>
                <div className="content">
                    <p>{name}</p>
                    <button type='button' style={{ backgroundColor: color }}></button>
                </div>
            </div>
            <div className="cartprice">
                <h5><FormatPrice price={price} /></h5>
            </div>
            <div className="cartquantity">
                <Cardamount
                    amount={amount}
                    setdecrease={() => { setDecrease(id) }}
                    setincrease={() => { setIncrease(id) }}
                />
            </div>
            <div className="cartsubtotal">
                <h5><FormatPrice price={price * amount} /></h5>
            </div>
            <div className="cartremove">
                <AiFillDelete className="icon" onClick={() => { removeitem(id) }} />
            </div>
        </div>
    )
}

export default Cartcard
