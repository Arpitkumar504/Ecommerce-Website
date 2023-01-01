import React from 'react'
import { Link } from 'react-router-dom'

const Pagenavigation = ({ title }) => {
    return (
        <div className='container'>
            <h5 className='navigation'>
                <Link to="/">Home</Link>/{title}
            </h5>
        </div>
    )
}

export default Pagenavigation
