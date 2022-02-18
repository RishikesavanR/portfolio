import React from 'react'
import './Qualifications.css'
import { Element } from 'react-scroll'
import {useMediaQuery} from "@chakra-ui/media-query";
import {Text} from "@chakra-ui/layout"
const Qualification = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
  return (
    <Element className='qualifications' name='Qualifications'>
      <Text className='qualificationsText' fontSize={isNotSmallerScreen ? 50:30}>QUALIFICATIONS</Text>
      <h1 className='degree' >BCA</h1>
      <h1 className='expansation'>(Bachelor of Computer Application)</h1>
      <h1 className='year'> Degree completion in 2022</h1>
      </Element>
  )
}

export default Qualification
//