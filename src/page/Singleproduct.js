import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UseGlobalContext } from '../context/Productcontext';

const Singleproduct = () => {
    const { id } = useParams();
    const { getsingleproducts, singleproduct } = UseGlobalContext();
    const api = "https://api.pujakaitem.com/api/products";
    useEffect(() => {
        getsingleproducts(`${api}?id=${id}`);
    }, [id])
    return (
        <div className="singleproduct container">
            
        </div>
    )
}

export default Singleproduct
