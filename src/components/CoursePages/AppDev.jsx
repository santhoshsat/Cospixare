import React from 'react'

import CourseLandingPage from '../CourseLandingPage/CourseLandingPage'
import { EachCourseDetails } from '../../../data/CourseData'

function AppDev() {
     const { title, description, TechnologiesList, duration, fees, mainImg, whatWillYouLearn, overview } = EachCourseDetails[1]
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

export default AppDev;