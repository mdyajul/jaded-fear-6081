import { Box, Link, Image, Icon, Show, Hide } from "@chakra-ui/react"


function NavbarA(){
    return <>
       <Box w='50%' p={30} color='RGBA(0, 0, 0, 0.64)' justifyContent='space-around' display='flex' margin='auto'>
        <Hide  below="md" >

        
      <Link fontSize='25px' marginTop='25px'>NEWS</Link>
      <Box  display='flex' alignItems='center' justifyContent='center' marginTop='25px' gap='5px'>
      <Icon viewBox='0 0 200 200' color='red.500'  >
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>
      <Link fontSize='25px' _hover={{color:'orange'}} >LIVE TV</Link>
      </Box>
      </Hide>
      <Image src='https://akm-img-a-in.tosshub.com/sites/all/themes/itg/logo.png?v=1.52'/>
     <Hide below="md">

    
      <Link fontSize='25px' _hover={{color:'orange'}} marginTop='25px'>APP</Link>
      <Link fontSize='25px' _hover={{color:'orange'}} marginTop='25px'>MAGAZINE</Link>
      </Hide>
    </Box>
    </>
}

export default NavbarA