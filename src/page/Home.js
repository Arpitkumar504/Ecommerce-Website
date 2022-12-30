import React from 'react'
import Hero from '../component/Hero'
import Process from '../component/Process';
import Trusted from '../component/Trusted';

const Home = () => {
    const data = {
        name: "Arpit Store",
        image: "./image/image1.png",
    };
    return (
        <div>
            <Hero {...data} />
            <Trusted/>
            <Process/>
        </div>
    )
}

export default Home