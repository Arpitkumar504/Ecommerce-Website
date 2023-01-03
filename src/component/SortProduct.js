import React from 'react'
import { BsGridFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa';
import { useFilterContext } from '../context/Filtercontext'

const SortProduct = () => {
    const { setgrid, setlist, sorting, gridview, filterproducts } = useFilterContext();
    return (
        <div className='productsort'>
            <div className="sortbtn">
                <button type='button' className={gridview ? "active" : ""} onClick={setgrid}><BsGridFill className="icon" /></button>
                <button type='button' className={!gridview ? "active" : ""} onClick={setlist}><FaThList className="icon" /></button>
            </div>
            <div className="sortlength">
                <h5>{`${filterproducts.length} Products Available`}</h5>
            </div>
            <div className="sortselect">
                <select className='selectitem' onChange={(e) => { sorting(e.currentTarget.value) }}>
                    <option value="lowest">Price(lowest)</option>
                    <option value="highest">Price(highest)</option>
                    <option value="a-z">Price(A-Z)</option>
                    <option value="z-a">Price(Z-A)</option>
                </select>
            </div>
        </div>
    )
}

export default SortProduct
