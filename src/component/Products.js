import React from 'react'
import { useFilterContext } from '../context/Filtercontext'
import Gridview from './Gridview'
import Listview from './Listview'

const Products = () => {
    const { filterproducts, gridview } = useFilterContext();

    if (filterproducts.length === 0) {
        return (
            <div className='noproduct'>
                <h5>Product not found</h5>
            </div>
        )
    }
    if (gridview === true) {
        return <Gridview product={filterproducts} />
    }
    if (gridview === false) {
        return <Listview product={filterproducts} />
    }
}

export default Products
