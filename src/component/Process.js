import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdOutlineSecurity } from 'react-icons/md'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { RiSecurePaymentFill } from 'react-icons/ri'

const Process = () => {
    return (
        <div className='process container'>
            <div className='box'>
                <div>
                    <TbTruckDelivery className='icons' />
                </div>
                <h5>Super Fast and Free Delivery</h5>
            </div>
            <div className='processmiddle'>
                <div className='boxes'>
                    <div>
                        <MdOutlineSecurity className='icons' />
                    </div>
                    <h5>Non-Contact Shiping</h5>
                </div>
                <div className='boxes'>
                    <div>
                        <FaMoneyBillAlt className='icons' />
                    </div>
                    <h5>Money-back Guaranteed</h5>
                </div>
            </div>
            <div className='box'>
                <div>
                    <RiSecurePaymentFill className='icons' />
                </div>
                <h5>Super Secure Payment System</h5>
            </div>
        </div>
    )
}

export default Process
