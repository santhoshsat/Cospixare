import React from 'react'

import CourseLandingPage from '../CourseLandingPage/CourseLandingPage'
import { EachCourseDetails } from '../../../data/CourseData'

const WebDev = () => {
    const { title, description, TechnologiesList, mainImg, duration, fees, whatWillYouLearn, overview } = EachCourseDetails[0]
    console.log({
        title, description, TechnologiesList, mainImg, duration , fees, whatWillYouLearn
    })
    return (
        <>
            <CourseLandingPage
                key={title}
                heading={title}
                overview={overview}
                description={description}
                techs={TechnologiesList}
                ImageProfile={mainImg}
                price={fees}
                duration={duration}
                ListAllUses={whatWillYouLearn}
            />
        </>
    )
}

export default WebDev