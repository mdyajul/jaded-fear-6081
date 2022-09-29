import { Box, HStack } from "@chakra-ui/react"
import {Routes, Route, Link} from 'react-router-dom'
import Headline from "../Headline/Headline"
import MiddleSide from "../Middle/MiddleSide"
import Business from "../Pages/Business"
import India from "../Pages/India"
import Movies from "../Pages/Movies"
import MyFeed from "../Pages/MyFeed"
import Science from "../Pages/Science"
import Sports from "../Pages/Sports"
import World from "../Pages/World"
import Tech from "../Pages/Tech"

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
  <Link _hover={{color:'orange'}} to='/india'>INDIA</Link>

  </Box>
  <Box w='70px' h='40px' borderRight='1px solid black' alignItems='center' display='flex' justifyContent='center'>
  <Link _hover={{color:'orange'}} to='/world'>WORLD</Link>

  </Box>
  <Box w='80px' h='40px'   borderRight='1px solid black' alignItems='center' display='flex' justifyContent='center'>
  <Link _hover={{color:'orange'}} to='/business'>BUSINESS</Link>

  </Box>
  <Box w='60px' h='40px'  borderRight='1px solid black' alignItems='center' display='flex' justifyContent='center'>
  <Link _hover={{color:'orange'}} to='/tech'>TECH</Link>

  </Box>
  <Box w='70px' h='40px' borderRight='1px solid black' alignItems='center' display='flex' justifyContent='center'>
  <Link _hover={{color:'orange'}} to='/movies'>MOVIES</Link>

  </Box>
  <Box w='70px' h='40px'  borderRight='1px solid black' alignItems='center' display='flex' justifyContent='center'>
  <Link _hover={{color:'orange'}} to='/sports'>SPORTS</Link>

  </Box>
  <Box w='70px' h='40px'  borderRight='1px solid black' alignItems='center' display='flex' justifyContent='center'>
  <Link _hover={{color:'orange'}} to='/science'>SCIENCE</Link>

  </Box>
 
</HStack>
    <Routes>
     <Route path='/' element ={<MiddleSide/>}>Home</Route>
     <Route path="/myfeed" element={<MyFeed/>} >My feed</Route>
     <Route path="/india" element={<India/>} >INDIA</Route>
     <Route path="/world" element={<World/>} >WORLD</Route>
     <Route path="/business" element={<Business/>} >BUSINESS</Route>
     <Route path="/tech" element={<Tech/>} >TECH</Route>
     <Route path="/movies" element={<Movies/>} >MOVIES</Route>
     <Route path="/sports" element={<Sports/>} >SPORTS</Route>
     <Route path="/science" element={<Science/>} >SCIENCE</Route>
    
    </Routes> 
    </>
}
export default NavbarB