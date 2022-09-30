import { Box, Center, Container, Flex, Grid, GridItem, Image } from "@chakra-ui/react"
import Headline from "../Headline/Headline"
import Post from "../Headline/Post"
import Home from "../Home/Home"
import MiddleSideOne from "./MiddleSideOne"
import MiddleSideThree from "./MiddleSideThree"
import MiddleSideTwo from "./MiddleSideTwo"


function MiddleSide() {

    return (
    <Container maxW={{base: "full", md: "container.xl"}} marginTop='20px'>
            <Image margin='auto' marginBottom='20px' src="https://tpc.googlesyndication.com/simgad/8082389582056063472"/>
        
        <Grid
         w='100%'
        // marginTop='20px'
         templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(1, 1fr)',
          lg: 'repeat(4, 1fr)'
  
       }}
       gap={10}
        >
            <GridItem w='100%' colSpan={2}><Headline/></GridItem>
            <GridItem w='100%' colSpan={1}><Post/></GridItem>
            <GridItem w='100%%' colSpan={1}><Home/></GridItem>

            
            
            
        </Grid>
      
       
       <Grid  
       w='100%'
       marginTop='20px'
       templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)'

     }}
       >
        <GridItem>
        <Box>
          <MiddleSideOne/>
          </Box>
        </GridItem>

        <GridItem>
        <Box >
         <MiddleSideTwo/>
         </Box>
        </GridItem>

        <GridItem>
        <Box>
            <MiddleSideThree/>
        </Box> 
        </GridItem>

          
         
        
       </Grid>
    </Container>
    )
}

export default MiddleSide

