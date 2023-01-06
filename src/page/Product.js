import React from 'react'
import Filterproduct from '../component/Filterproduct'
import Products from '../component/Products'
import SortProduct from '../component/SortProduct'

const Product = () => {
    return (
        <div className='product container'>
            <div className="productfilter">
                <Filterproduct />
            </div>
            <div className="products">
                <div className="productsort sort">
                    <SortProduct />
                </div>
                <div className="productdata">
                    <Products />
                </div>
            </div>
        </div>
    )
}

export default Product
