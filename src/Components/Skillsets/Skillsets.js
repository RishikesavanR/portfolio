import React from 'react'
import './Skillsets.css'
import {useMediaQuery} from '@chakra-ui/media-query'
import { Element } from 'react-scroll'
import {AiOutlineHtml5} from "react-icons/ai"
import { DiCss3,DiJavascript1,DiReact,DiMaterializecss,DiNpm,DiGit,DiGithub} from "react-icons/di"
import SkillSmallerScreen from './SkillSmallerScreen'
const Skillsets = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

  return (
    <Element className='Skillsets' name='Skillsets' >
      <h1 className='skillsetsText'>SKILLSETS
      </h1>
      {isNotSmallerScreen ? 
        <div className='skillsetsIcons'>
          
         
          
         <div>
            <AiOutlineHtml5 className='htmlIcons'  />  
            <h1 className='html'> HTML5</h1>
         </div>
         <div>
            <DiCss3 className='CssIcons' />
            <h1 className='css'>CSS</h1>
         </div>
         <div>
            <DiMaterializecss className='materialIcons' />
            <h1 className='material'>Material Ui</h1>
         </div>
         <div>
           <DiJavascript1 className='javascriptIcons' />
           <h1 className='javascript'>JAVASCRIPT</h1>
         </div>
         <div>
           <DiReact className='reactIcons' />
          <h1 className='react'>REACT JS</h1>
         </div>
         <div>
           <DiNpm className='nodejsIcons' />
           <h1 className='nodejs' >NODE JS</h1>
         </div>
         <div>
           <DiGit className='gitIcons'/>
           <h1 className='git'>GIT</h1>
         </div>
         <div>
           <DiGithub className='githubIcons'/>
           <h1 className='github'>GITHUB</h1>
         </div> 
       </div> :
      <SkillSmallerScreen />}
       
    </Element>
  )
}

export default Skillsets
//
/////
 //