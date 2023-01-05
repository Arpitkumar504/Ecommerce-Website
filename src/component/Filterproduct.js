import React from 'react'
import { useFilterContext } from '../context/Filtercontext'
import { FaCheck } from 'react-icons/fa'

const Filterproduct = () => {
    const { filter: { text, category, color }, allproducts, updatefiltervalue } = useFilterContext();

    const getuniquedata = (data, property) => {
        let newval = data.map((element) => {
            return element[property];
        })
        if (property === "colors") {
            newval = newval.flat();
            newval = newval.filter(element => {
                return element.length > 4;
            })
        }
        return newval = ["all", ...new Set(newval)];
    }

    const categorydata = getuniquedata(allproducts, "category");
    const companydata = getuniquedata(allproducts, "company");
    const colordata = getuniquedata(allproducts, "colors");
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
                                className={element == category ? "active" : ""}
                                onClick={(e) => updatefiltervalue(e.currentTarget)}
                            >{element.toUpperCase()}</button>
                        )
                    })
                }
            </div>
            <div className="filtercompany">
                <h5>Company</h5>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <select name="company" onChange={(e) => { updatefiltervalue(e.currentTarget) }}>
                        {
                            companydata.map((element, index) => {
                                return (
                                    <option value={element} key={index}>{element}</option>
                                )
                            })
                        }
                    </select>
                </form>
            </div>
            <div className="filtercolor">
                <h5>Color</h5>
                <div className="filtercolorbox">
                    {
                        colordata.map((element, index) => {
                            if (element === "all") {
                                return (
                                    <button
                                        key={index}
                                        type="button"
                                        value={element}
                                        name="color"
                                        onClick={(e) => { updatefiltervalue(e.currentTarget) }}>
                                        <h5>All</h5>
                                    </button>
                                );
                            }
                            return (
                                <button
                                    type='button'
                                    key={index}
                                    name='color'
                                    value={element}
                                    style={{ backgroundColor: element }}
                                    onClick={(e) => { updatefiltervalue(e.currentTarget) }}
                                    className={color == element ? "cartbtn active" : "cartbtn"}
                                >
                                    {element.includes(color) ? <FaCheck className="filtericon" /> : ""}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Filterproduct
