import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdOutlineSecurity } from 'react-icons/md'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { RiSecurePaymentFill } from 'react-icons/ri'

const Process = () => {
    return (
        <div className='process container'>
            <div className='box'>
                <div class="iconbox">
                    <TbTruckDelivery className='icons' />
                </div>
                <div className="content">
                    <h5>Super Fast and Free Delivery</h5>
                </div>
            </div>
            <div className='processmiddle'>
                <div className='boxes'>
                    <div class="iconbox">
                        <MdOutlineSecurity className='icons' />
                    </div>
                    <div className="content">
                        <h5>Non-Contact Shiping</h5>
                    </div>
                </div>
                <div className='boxes'>
                    <div class="iconbox">
                        <FaMoneyBillAlt className='icons' />
                    </div>
                    <div className="content">
                        <h5>Money-back Guaranteed</h5>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div class="iconbox">
                    <RiSecurePaymentFill className='icons' />
                </div>
                <div className="content">
                    <h5>Super Secure Payment System</h5>
                </div>
            </div>
        </div>
    )
}

export default Process
