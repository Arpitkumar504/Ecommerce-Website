import React from 'react'
import { useFilterContext } from '../context/Filtercontext'
import Gridview from './Gridview'
import Listview from './Listview'

const Products = () => {
    const { filterproducts, gridview } = useFilterContext();

    if (gridview === true) {
        return <Gridview product={filterproducts} />
    }
    if (gridview === false) {
        return <Listview product={filterproducts} />
    }
}

export default Products
