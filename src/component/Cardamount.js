import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai'

const Cardamount = ({ amount, setdecrease, setincrease }) => {
    return (
        <div className='amount'>
            <button type="button" onClick={() => { setincrease() }}><AiFillPlusCircle /></button>
            <h5>{amount}</h5>
            <button type="button" onClick={() => { setdecrease() }}><AiFillMinusCircle /></button>
        </div>
    )
}

export default Cardamount
