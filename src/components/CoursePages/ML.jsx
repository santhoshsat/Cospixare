import React from 'react'

import CourseLandingPage from '../CourseLandingPage/CourseLandingPage'
import { EachCourseDetails } from '../../../data/CourseData'


function ML() {
    const { title, description, TechnologiesList, duration, fees, mainImg, whatWillYouLearn, overview } = EachCourseDetails[3]
    return (
       <>
           <CourseLandingPage
               key={title}
               heading={title}
               overview={overview}
               description={description}
               techs={TechnologiesList}
               ImageProfile={mainImg}
               duration={duration}
               price={fees}
               ListAllUses={whatWillYouLearn}
           />
       </>
   )
}

export default ML 