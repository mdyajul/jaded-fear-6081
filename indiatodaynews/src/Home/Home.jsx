import { Box, Image, Text } from "@chakra-ui/react";

function Home() {
    return (
        <Box w='full' h='350px'  p={8} border='1px solid gray' marginLeft='10px'>
            <Text textAlign='center'>Advertisement</Text>
         <Image boxSize='full'  src='https://tpc.googlesyndication.com/simgad/4392009448719519744'/>

        </Box>
    )
}

export default Home