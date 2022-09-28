import { Box, Link, Image } from "@chakra-ui/react"


function NavbarA(){
    return <>
       <Box w='50%' p={30} color='RGBA(0, 0, 0, 0.64)' justifyContent='space-around' display='flex' margin='auto'>
      <Link fontSize='25px' marginTop='25px'>NEWS</Link>
      <Link fontSize='25px' _hover={{color:'orange'}} marginTop='25px'>LIVE TV</Link>
      <Image src='https://akm-img-a-in.tosshub.com/sites/all/themes/itg/logo.png?v=1.52'/>
      <Link fontSize='25px' _hover={{color:'orange'}} marginTop='25px'>APP</Link>
      <Link fontSize='25px' _hover={{color:'orange'}} marginTop='25px'>MAGAZINE</Link>
    </Box>
    </>
}

export default NavbarA