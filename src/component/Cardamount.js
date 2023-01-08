import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai'

const Cardamount = ({ amount, setdecrease, setincrease }) => {
    return (
        <div className='amount'>
            <button type="button" onClick={() => { setincrease() }}><AiFillPlusCircle className='icon' /></button>
            <h5>{amount}</h5>
            <button type="button" onClick={() => { setdecrease() }}><AiFillMinusCircle className='icon' /></button>
        </div>
    )
}

export default Cardamount
