import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Cardamount from './Cardamount';
const Addtocart = ({ product }) => {
    const { id, colors, stock } = product;
    const [color, setcolor] = useState(colors[0])
    const [amount, setamount] = useState(1);
    const setdecrease = () => {
        amount > 1 ? setamount(amount - 1) : setamount(1)
    }
    const setincrease = () => {
        amount < stock ? setamount(amount + 1) : setamount(stock);
    }
    return (
        <div className='addtocart'>
            <div className='addcartbutton'>
                <h5 className='color'>Color: </h5>
                {
                    colors.map((element, index) => {
                        return (
                            <button
                                type='button'
                                key={index}
                                style={{ backgroundColor: element }}
                                onClick={(e) => { setcolor(element) }}
                                className={color === element ? "cartbtn active" : "cartbtn"}>
                                {color === element ? <FaCheck className='icon' /> : null}
                            </button>
                        )
                    })
                }
            </div>
            <Cardamount
                amount={amount}
                setdecrease={setdecrease}
                setincrease={setincrease}
            />
            <Link to="/cart">
                <button type='button' className='addtocartbtn'>Add To Cart</button>
            </Link>
        </div>
    )
}

export default Addtocart
