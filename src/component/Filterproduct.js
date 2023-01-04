import React from 'react'
import { useFilterContext } from '../context/Filtercontext'

const Filterproduct = () => {
    const { filter: { text }, allproducts, updatefiltervalue } = useFilterContext();

    const getuniquedata = (data, property) => {
        let newval = data.map((element) => {
            return element[property];
        })
        return newval = ["all", ...new Set(newval)];
    }

    const categorydata = getuniquedata(allproducts, "category");
    return (
        <div className='filterproduct'>
            <div className="search">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Search Here"
                        name='text'
                        value={text}
                        autoComplete="off"
                        onChange={(e) => { updatefiltervalue(e.currentTarget) }}
                    />
                </form>
            </div>
            <div className="filtercategory">
                <h5>Category</h5>
                {
                    categorydata.map((element, index) => {
                        return (
                            <button
                                type='button'
                                key={index}
                                name="category"
                                value={element}
                                onClick={(e) => updatefiltervalue(e.currentTarget)}
                            >{element.toUpperCase()}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Filterproduct
