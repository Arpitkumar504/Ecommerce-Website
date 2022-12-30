import React from 'react'
import Hero from '../component/Hero'

const About = () => {
    const data = {
        name: "Arpit Ecommerce",
        image: "./image/image2.png",
    }
    return (
        <div>
            <Hero {...data} />
        </div>
    )
}

export default About