import React from 'react'
import { BsGridFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa';
import { useFilterContext } from '../context/Filtercontext'

const SortProduct = () => {
    const { setgrid, setlist, gridview } = useFilterContext();
    return (
        <div className='productsort'>
            <div className="sortbtn">
                <button type='button' className={gridview ? "active" : ""} onClick={setgrid}><BsGridFill className="icon" /></button>
                <button type='button' className={!gridview ? "active" : ""} onClick={setlist}><FaThList className="icon" /></button>
            </div>
        </div>
    )
}

export default SortProduct
