import React from 'react';
import {Link} from 'react-scroll'
import './Header.css';
import {IconButton} from '@chakra-ui/button';
import {FaSun,FaMoon} from 'react-icons/fa';
import {useColorMode} from "@chakra-ui/color-mode";
import Headerright from './Headerright';
import {useMediaQuery} from "@chakra-ui/media-query";
const Header = () => {
    const {colorMode,toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
  return (
    <div className='header'>
        <div className='header__left'>
        <h3>Develo<span>per</span></h3>
        </div>
        <div className="thememode">
        <div className='modebutton' >
            <IconButton icon = {isDark ? <FaMoon/> : <FaSun/>}
            isRound = "true"
            onClick={toggleColorMode}/></div>
        </div>
        {isNotSmallerScreen ? 
        <div className='header__right'>
            <Link to='About' >
            <h4>About</h4>
            </Link>
            <Link to='Qualifications'>
            <h4>Qualifications</h4>
            </Link>

            <Link to='Skillsets' >
            <h4>Skillsets</h4>
            </Link>
            <Link to='Projects' >
            <h4>Projects</h4>
            </Link>
            <Link to='contact'
               >
            <h4>Contact</h4>
            </Link>
           
            </div>:
            <Headerright ml={10}/>}
            <div>
             
            </div>
     </div>
  )
}

export default Header