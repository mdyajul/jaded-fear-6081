import { Box, Center, Container, Flex } from "@chakra-ui/react"
import MiddleSideOne from "./MiddleSideOne"
import MiddleSideThree from "./MiddleSideThree"
import MiddleSideTwo from "./MiddleSideTwo"


function MiddleSide() {

    return (
    <Container  maxW='full' marginTop='20px'>
       <Flex  w='100%'>
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

