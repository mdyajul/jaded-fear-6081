import { Box, Flex, HStack, Stack, Switch } from "@chakra-ui/react"
import {Routes, Route, Link} from 'react-router-dom'
 
import AllRoutes from "./AllRoutes"
import DrawerExample from "./Drawer"
import MenuIconList from "./Menu"
 
 

function NavbarB() {
    return <>
    <Flex spacing='0px' bg='#a00606' color='white' >
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
  <Box>
  
    <DrawerExample/>
  </Box>
 
    {/* <ToggleTheme/> */}
 
  
</Flex>
   <AllRoutes/>
    </>
}
export default NavbarB