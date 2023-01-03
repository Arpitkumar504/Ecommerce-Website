import React from 'react'
import Card from './Card'

const Gridview = ({ product }) => {
    return (
        <div className='productgrid'>
            {
                product.map((element) => {
                    return (
                        <Card
                            key={element.id}
                            {...element}
                        />
                    )
                })
            }
        </div>
    )
}

export default Gridview
