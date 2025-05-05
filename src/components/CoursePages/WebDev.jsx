import React from 'react'
import CourseLandingPage from '../CourseLandingPage/CourseLandingPage'

import { EachCourseDetails } from '../../../data/CourseData'


const WebDev = () => {
    const { title, description, TechnologiesList } = EachCourseDetails[0]
    console.log({
        title, description, TechnologiesList
    })
    return (
        <>
            <CourseLandingPage
                heading={title}
                desc={description}
                techs={TechnologiesList}
            />
        </>
    )
}

export default WebDev