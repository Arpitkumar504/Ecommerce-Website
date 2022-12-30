import React from 'react'
import Hero from '../component/Hero'

const Home = () => {
    const data = {
        name: "Arpit Store",
        image: "./image/image1.png",
    };
    return (
        <div className='container'>
            <Hero {...data} />
        </div>
    )
}

export default Home