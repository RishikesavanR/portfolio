import React from 'react'
import {AiOutlineHtml5} from "react-icons/ai"
import { DiCss3,DiJavascript1,DiReact,DiMaterializecss,DiNpm,DiGit,DiGithub} from "react-icons/di"
import './SkillSmallerScreen.css'

const SkillSmallerScreen = () => {
  return (
   <div className='skillsmallerscreen'>
       <div className='skillsetsleft'>
        <div>
            <AiOutlineHtml5 className='mhtmlIcons'  />  
            <h1 className='mhtml'> HTML5</h1>
         </div>
         <div>
            <DiCss3 className='mCssIcons' />
            <h1 className='mcss'>CSS</h1>
         </div>
         <div>
            <DiMaterializecss className='mmaterialIcons' />
            <h1 className='mmaterial'>Material Ui</h1>
         </div>
         <div>
           <DiJavascript1 className='mjavascriptIcons' />
           <h1 className='mjavascript'>JAVASCRIPT</h1>
         </div></div>
         <div className='skillright'>
             <div>
           <DiReact className='mreactIcons' />
          <h1 className='mreact'>REACT JS</h1>
         </div>
         <div>
           <DiNpm className='mnodejsIcons' />
           <h1 className='mnodejs' >NODE JS</h1>
         </div>
         <div>
           <DiGit className='mgitIcons'/>
           <h1 className='mgit'>GIT</h1>
         </div>
         <div>
           <DiGithub className='mgithubIcons'/>
           <h1 className='mgithub'>GITHUB</h1>
         </div></div>
   </div>
   
  )
}

export default SkillSmallerScreen