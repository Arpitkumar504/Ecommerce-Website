import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Myimage from '../component/Myimage';
import { TbTruckDelivery, TbReplace } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import { UseGlobalContext } from '../context/Productcontext';
import FormatPrice from '../component/Formatprice';
import Pagenavigation from '../component/Pagenavigation';

const Singleproduct = () => {
    const { id } = useParams();
    const { getsingleproducts, singleproduct } = UseGlobalContext();
    const api = "https://api.pujakaitem.com/api/products";
    useEffect(() => {
        getsingleproducts(`${api}?id=${id}`);
    }, [id])
    const { id: ids, name, company, price, description, category, stock, stars, reviews, image } = singleproduct;
    return (
        <div>
            <Pagenavigation title={name} />
            <div className="singleproduct container">
                <div className="image">
                    <Myimage image={image} />
                </div>
                <div className="content">
                    <h1>{name}</h1>
                    <h5>Deals of The Day: <span><FormatPrice price={price} /></span></h5>
                    <p>{description}</p>
                    <div className="processship">
                        <div className='processbox'>
                            <div>
                                <TbTruckDelivery className="icons" />
                            </div>
                            <p>Free Delivery</p>
                        </div>
                        <div className='processbox'>
                            <div>
                                <TbReplace className="icons" />
                            </div>
                            <p>Replacement</p>
                        </div>
                        <div className='processbox'>
                            <div>
                                <TbTruckDelivery className="icons" />
                            </div>
                            <p>Arpit Delivery</p>
                        </div>
                        <div className='processbox'>
                            <div>
                                <MdSecurity className="icons" />
                            </div>
                            <p>2 Year Warranty</p>
                        </div>
                    </div>
                    <hr />
                    <h5>Avaliable: <span>{stock > 0 ? "In Stock" : "Out of Stock"}</span></h5>
                    <h5>Product Id: <span>{ids}</span></h5>
                    <h5>Brand: <span>{company}</span></h5>
                </div>
            </div>
        </div>
    )
}

export default Singleproduct
