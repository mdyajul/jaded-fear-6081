import { Box, Image, Text } from "@chakra-ui/react";

function Home() {
    return (
        <Box w='30%' h='350px' p={10} border='1px solid black' marginLeft='10px'>
            <Text textAlign='center'>Advertisement</Text>
         <Image boxSize='full'  src='https://tpc.googlesyndication.com/simgad/4392009448719519744'/>

        </Box>
    )
}

export default Home