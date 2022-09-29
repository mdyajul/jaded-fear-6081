import { Box, Center, Container, Flex, Image } from "@chakra-ui/react"
import Headline from "../Headline/Headline"
import Post from "../Headline/Post"
import Home from "../Home/Home"
import MiddleSideOne from "./MiddleSideOne"
import MiddleSideThree from "./MiddleSideThree"
import MiddleSideTwo from "./MiddleSideTwo"


function MiddleSide() {

    return (
    <Container  maxW='full' marginTop='20px'>
            <Image margin='auto' marginBottom='20px' src="https://tpc.googlesyndication.com/simgad/8082389582056063472"/>
        
        <Flex>
            <Headline/>
            <Post/>
            <Home/>
        </Flex>
      
       
       <Flex  w='100%' marginTop='20px'>
          <Box>
          <MiddleSideOne/>
          </Box>
         <Box >
         <MiddleSideTwo/>
         </Box>
          <Box>
            <MiddleSideThree/>
        </Box> 
       </Flex>
    </Container>
    )
}

export default MiddleSide

