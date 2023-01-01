import React, { useState } from 'react'

const Myimage = ({ image = [{ url: "" }] }) => {
    const [show, setshow] = useState(image[0]);
    return (
        <div className='productimage'>
            <div className="imagegroup">
                {
                    image.map((element, index) => {
                        const { url, filename, id } = element;
                        return (
                            <div className="image">
                                <img
                                    src={url}
                                    alt={filename}
                                    key={id}
                                    onClick={() => { setshow(element) }}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className="mainimage">
                <img src={show.url} alt={show.filename} />
            </div>
        </div>
    )
}

export default Myimage
