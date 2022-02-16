import React from 'react'
import './About.css'
import {Element} from 'react-scroll'
const About = () => {
  return (
    <Element className='about' name="About">
      <h3 className='aboutText'>About</h3>
     
      <h3 className='aboutKey'>Learning knowledge from the World.</h3>
      <h3 className='aboutThought'>I think about coding ....</h3>
      <h3 className='aboutCode'>Code is not a word,<br></br>
      It's an emotion between <span className='spans' >C</span>omputers and <span className='spans'>D</span>evelopers</h3>
      </Element>
   
  )
}

export default About