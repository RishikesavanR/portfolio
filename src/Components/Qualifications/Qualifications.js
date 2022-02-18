import React from 'react'
import './Qualifications.css'
import { Element } from 'react-scroll'
import {useMediaQuery} from "@chakra-ui/media-query";
const Qualification = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
  return (
    <Element className='qualifications' name='Qualifications'>
      <h1 className='qualificationsText'>QUALIFICATIONS</h1>
      <h1 className='degree' >BCA</h1>
      <h1 className='expansation'>(Bachelor of Computer Application)</h1>
      <h1 className='year'> Degree completion in 2022</h1>
      </Element>
  )
}

export default Qualification
//fontSize={isNotSmallerScreen ? 60:30}