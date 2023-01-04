import React from 'react'
import { useFilterContext } from '../context/Filtercontext'

const Filterproduct = () => {
    const { filter: { text }, updatefiltervalue } = useFilterContext();
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
        </div>
    )
}

export default Filterproduct
