import React from 'react';
import './Topcontainer.css';
import {useColorMode} from "@chakra-ui/color-mode";
import {Image} from "@chakra-ui/image";
import {Circle,Stack,Flex,Box,Text} from "@chakra-ui/layout";
import {useMediaQuery} from "@chakra-ui/media-query";

const Topcontainer = () => {
  const {colorMode} = useColorMode()
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

  return (
    <Stack className='Stack'>
      {isNotSmallerScreen &&(
        <Circle className="circle" />
        )}
      
      
      <Flex className='flex' direction={isNotSmallerScreen ?  "row":"column"}
      p={isNotSmallerScreen ? 20 : 0 }>
      <Image mt={isNotSmallerScreen? 16:16}className='image'
        src='https://scontent.fblr3-3.fna.fbcdn.net/v/t39.30808-6/272985555_715271959853743_7887097970863037004_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ib0B71mDKu0AX9LcKNe&_nc_ht=scontent.fblr3-3.fna&oh=00_AT8vzWeInWBax0Js7-m_GrtXPJ-zZLab2zyxPZTE1VTwkw&oe=620FD1D1'
        />
        <Box  ml={isNotSmallerScreen ? 10 : 0} mt={isNotSmallerScreen? 30:5} alignSelf="center">
        
          <Text className='hi'>Hi,I am</Text>
          <Text className='name' fontSize={isNotSmallerScreen ? 50:30} >RISHIKESAVAN R</Text>
          <Text className='role' fontSize={isNotSmallerScreen ? 50:30} >Frontend Web Developer</Text>
        </Box>
        
      </Flex>
      </Stack>
    
  )
}

export default Topcontainer
//<div className='topcontainer'><h4> </h4>
  //  <h2>RISHIKESAVAN R</h2>
   // <img src="" 
   // height="15%" width="20%"/></div>
   //
   //