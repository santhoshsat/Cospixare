import React from 'react'
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMobileAlt, faBrain, faRobot } from '@fortawesome/free-solid-svg-icons'

import { CourseListData } from '../../../data/CourseData'

const iconsData = [
    faCode, faMobileAlt, faBrain, faRobot
]

const CourseList = () => {
    return(
        <>
             <main>
                  <section className="servicestwo" id="servicespage">
                    <h2 className="section-titletwo">Our Courses</h2>
                    <div className="service-containertwo">
                        {
                            CourseListData.map((data, index) => (
                                <div
                                    className="service-cardtwo"
                                    data-aos="fade-up"
                                    data-aos-delay={1.3}
                                    key={index}
                                >
                                    <div className="service-icon">
                                        <FontAwesomeIcon icon={iconsData[index]} />
                                    </div>
                                    <h3>{data.title}</h3>
                                    <p style={{ textAlign: 'left' }}>{data.description}</p>
                                    <a className="btn" href={data.destination}>Read more →</a>
                                </div>
                            ))
                        }
                    </div>
                  </section>
                </main>
        </>
    )
}

export default CourseList