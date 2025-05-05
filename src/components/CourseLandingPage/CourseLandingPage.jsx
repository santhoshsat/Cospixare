import React from 'react'

import UIuXDesignImage from '../../../assets/images/UIUXsample.PNG'
import './CourseLandingPage.css'

// heading, description, techs

const CourseLandingPage = ({ heading, desc, techs=[] }) => {

    console.log({
        heading, desc, techs
    })

  return (
    <div className='section'>
        <div className='text-element'>
            <h1>
                {heading}
                <br/>Steps for Startups
            </h1>
            <p>Product Cospixare</p>
            <p>Reviews (789)</p>
            <h5>{desc}</h5>
            <div className='container'>
                {
                    techs.map((tech, index) => (
                        <p key={index}>{tech}</p>
                    ))
                }
            </div>
            <div className="buttons">
                <div className="btn1">Subscribe to Learn</div>
                <div className="btn2">Add to Cart</div>
            </div>
        </div>
        <div className='image-element'>
            <img src={UIuXDesignImage} alt="sample image" />
        </div>
    </div>
  )
}

export default CourseLandingPage