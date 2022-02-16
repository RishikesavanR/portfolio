import React from 'react'
import './Projects.css';
import { Button } from '@chakra-ui/react';
import {Element} from 'react-scroll'
const Projects = () => {
  const gklink =()=>{
    window.open('https://rishikesavanr.github.io/googlekeep/','_blank')
  }
  const walink = () =>{
    window.open("https://rishikesavanr.github.io/weatherapp/")
  }
  const uilink = () =>{
    window.open("https://rishikesavanr.github.io/react-pages-redux/")
  }
  return (
    <Element className='projects' name='Projects'>
    <h1 className='projectsText'>Projects</h1>
    <div >
      <div className='googlekeep'>
        
        <h1 className='googlekeepheading' > <span className='span'>.</span>   Google keep   
        
        <Button className="linkbutton"  onClick={gklink} >Go to site</Button></h1>
        <div className='projectdescription'>
          <h3><span className='spaned'>.</span>This application is cloning from google keep.</h3>
          <h3><span className='spaned'>.</span>Using my coding style.</h3>
          <h3><span className='spaned'>.</span>This is mainly used for sticky notes.</h3>
          <h3><span className='spaned'>.</span>In this application used Reactjs components.</h3>
        </div>
        
      </div>
      <div className='weatherapp'>
        <h1 className='weatherappheading'>
          <span className = 'span'>.</span>  Weather Application
        <Button className="linkbutton"   onClick={walink} >
          Go to site</Button></h1>
          <div className='projectdescription'>
            <h3><span className='spaned'>.</span>In this application used for knowing current weather</h3>
            <h3><span className='spaned'>.</span>Using the weather site linking </h3>
            <h3><span className='spaned'>.</span>This is mainly based on linking the site</h3>
          </div>
      </div>
      <div className='userinfo'>
        <h1 className='userinfoheading' >
           <span className='span'>.</span>   
           User Information
            <Button className="linkbutton"   onClick={uilink} >
           Go to site</Button></h1>
           <div className='projectdescription'>
            <h3><span className='spaned'>.</span>This application is used for storing user information temporarily .</h3>
            <h3><span className='spaned'>.</span>Using React Redux.</h3>
            <h3><span className='spaned'>.</span>In this application Using the react router for page switching</h3>
            </div>
      </div>

    </div>
    </Element>
  )
}

export default Projects