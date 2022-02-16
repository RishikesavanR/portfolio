import './App.css';
import Header from './Components/Header/Header.js';
import Topcontainer from './Components/Topcontainer/Topcontainer.js';
import About from './Components/About/About';
import Qualifications from './Components/Qualifications/Qualifications';
import Skillsets from './Components/Skillsets/Skillsets.js';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact.js';
import {VStack,Flex,Spacer} from "@chakra-ui/layout";

function App() {
  
  return (
    <div>
      <VStack>
        <Flex width="100%">
        <Header/>
        

        
      </Flex>
      <Topcontainer />
      </VStack>
      
      
      <About />
      <Qualifications />
      <Skillsets />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
