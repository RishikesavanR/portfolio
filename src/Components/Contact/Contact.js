import React from 'react';
import './Contact.css';
import {AiOutlineMail,} from 'react-icons/ai';
import {GoMarkGithub} from 'react-icons/go';
import {BsLinkedin} from 'react-icons/bs';
import {IconButton} from '@chakra-ui/button';
import {Element} from "react-scroll"

const Contact = () => {
 
  const git=()=>{
    window.open("https://github.com/RishikesavanR ");
  }
  const Link=()=>{
    window.open("https://www.linkedin.com/in/rishikesavan-r-53a968214/ ");
  }
  return (
    <Element className='contact'name='contact'>
      <h1 className='contactText'>CONTACT </h1> 
      <h1 className='email'>Email:rishikesavan2223@gmail.com </h1>
      <div className='contacticons'>
        
        <IconButton className='giticon'icon={<GoMarkGithub/>} onClick={git}/>
        <IconButton className='Linkicon' icon={<BsLinkedin/>} onClick={Link}/>

      </div>
      <h3 className='copyrighttext'>Copyrights &copy; 2022</h3>
      </Element>
  )
}

export default Contact