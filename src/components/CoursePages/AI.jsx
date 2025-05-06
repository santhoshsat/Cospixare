import React from 'react'

import CourseLandingPage from '../CourseLandingPage/CourseLandingPage'
import { EachCourseDetails } from '../../../data/CourseData'

function AI() {
    const { title, description, TechnologiesList, duration, fees, mainImg, whatWillYouLearn, overview } = EachCourseDetails[2]

    const dimension = 500
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
                dimension={dimension}
            />
        </>
    )
}

export default AI