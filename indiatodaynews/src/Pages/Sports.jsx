import { Box, Container, Flex, Grid ,GridItem, Text, Image, Divider, Button} from "@chakra-ui/react"
import {useState, useEffect} from 'react'
 
import { getSports } from "./Api/api"
 
import SportsRead from "./Read/SportsRead"
 




function Sports() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const fetchWorld = (page) => {
    getSports({page,  pageSize: 4}).then((res) => setData(res.data.articles))
     
  }



  useEffect(() => {
    fetchWorld(page)
  },[page])



  console.log(data)

    return (
      <Container  maxW='90%' marginTop='20px'>
      <Image margin='auto' marginBottom='20px' src="https://tpc.googlesyndication.com/simgad/8082389582056063472"/>
  
   <Grid  
   w='full'
  templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
            lg: 'repeat(3, 1fr)'
                  }}
   gridAutoRows='repeat(2, 1fr)'
    
 gap={6}>

   <GridItem colSpan={2} w='100%' >
    
   <Text fontSize='20px' color='gray.400'>News/Sports</Text>
   <Divider/>
    <Text fontSize='40px' fontFamily='bolder'>Sports</Text>
   <Divider marginBottom='20px'/>

     {
      data.map((news) => 
      <Flex key={news.id} gap='10px' marginTop='10px'   marginBottom='30px'>
        <Box w='25%'  >
          <Image  boxSize='full' h='150px' src={news.urlToImage}/>
        </Box>
        <Box w='75%' >
         <Text fontSize='25px' marginBottom='20px' fontFamily='bolder'>{news.title}</Text>
         
          <Text>{news.content}</Text>
          <Text>{news.description}</Text>
        </Box>

      </Flex>
      )
     }
    <Grid gap='10px' margin='auto' direction='row'>
   <GridItem >
   <Button disabled={page === 1} onClick={() => setPage(page - 1 )}>Prev</Button>
   <Button>{page}</Button>
   <Button>{page + 1}</Button>
   <Button>{page + 2}</Button>
   <Button>{page + 3}</Button>
   <Button>{page + 4}</Button>
   <Button>{page + 5}</Button>
   <Button>{page + 6}</Button>
   <Button>{page + 7}</Button>
   <Button>{page + 8}</Button>
   <Button onClick={() => setPage(page + 1 )}>Next</Button>
   </GridItem>
   
     </Grid>
   </GridItem>
   <GridItem colSpan={1} w='100%' >
         <Box w='100%'  p={4} border='1px solid gray' bg='gray.200'>
            <Text textAlign='center'>Advertisement</Text>
         <Image boxSize='full'  src='https://tpc.googlesyndication.com/simgad/4392009448719519744'/>
        </Box>
        <Box>
         <SportsRead/>
        </Box>
   </GridItem>
   
   </Grid>
   
</Container>
    )
}
export default Sports