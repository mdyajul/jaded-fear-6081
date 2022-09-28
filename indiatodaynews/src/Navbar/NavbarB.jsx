import { Box, HStack } from "@chakra-ui/react"
import {Routes, Route, Link} from 'react-router-dom'
import Headline from "../Headline/Headline"
import MiddleSide from "../Middle/MiddleSide"

function NavbarB() {
    return <>
    <HStack spacing='0px' bg='#a00606' color='white' >
<Box w='150px' h='40px'  borderRight='1px solid black' alignItems='center' display='flex' justifyContent='center'>
    <Link _hover={{color:'orange'}} to='/'>HOME</Link>
  </Box>
  <Box w='90px' h='40px'  borderRight='1px solid black' alignItems='center' display='flex' justifyContent='center'>
  
  <Link color='orange' to='/myfeed'>MY FEED</Link>

  </Box>
  <Box w='60px' h='40px'  borderRight='1px solid black' alignItems='center' display='flex' justifyContent='center'>
  <Link _hover={{color:'orange'}}>INDIA</Link>

  </Box>
  <Box w='70px' h='40px' borderRight='1px solid black' alignItems='center' display='flex' justifyContent='center'>
  <Link _hover={{color:'orange'}}>WORLD</Link>

  </Box>
  <Box w='60px' h='40px'  borderRight='1px solid black' alignItems='center' display='flex' justifyContent='center'>
  <Link _hover={{color:'orange'}}>USA</Link>

  </Box>
  <Box w='120px' h='40px' borderRight='1px solid black' alignItems='center' display='flex' justifyContent='center'>
  <Link _hover={{color:'orange'}}>NEW ZEALAND</Link>

  </Box>
  <Box w='60px' h='40px' borderRight='1px solid black' alignItems='center' display='flex' justifyContent='center'>
  <Link _hover={{color:'orange'}}>CHINA</Link>

  </Box>
  <Box w='70px' h='40px'  borderRight='1px solid black' alignItems='center' display='flex' justifyContent='center'>
  <Link _hover={{color:'orange'}}>SPORTS</Link>

  </Box>
  <Box w='80px' h='40px'   borderRight='1px solid black' alignItems='center' display='flex' justifyContent='center'>
  <Link _hover={{color:'orange'}}>BUSINESS</Link>

  </Box>
  <Box w='60px' h='40px'  borderRight='1px solid black' alignItems='center' display='flex' justifyContent='center'>
  <Link _hover={{color:'orange'}}>TECH</Link>

  </Box>
</HStack>
    <Routes>
     <Route path='/' element ={<MiddleSide/>}>Home</Route>
     <Route path="/myfeed"  >My feed</Route>

    </Routes> 
    </>
}
export default NavbarB