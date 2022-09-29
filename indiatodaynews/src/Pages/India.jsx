import { Box, Container, Flex, Grid ,GridItem, Text, Image, Divider, Button} from "@chakra-ui/react"
import {useState, useEffect} from 'react'
import { getIndia } from "./Api/api"
import Pagination from "./Pagination"




function India() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const fetchIndia = (page) => {
    getIndia({page,  pageSize: 4}).then((res) => setData(res.data.articles))
  }

  useEffect(() => {
    fetchIndia(page)
  },[page])
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
         border="1px solid red"
       gap={6}>

         <GridItem colSpan={2} w='100%' >
          
         <Text fontSize='20px' color='gray.400'>News/India</Text>
         <Divider/>
          <Text fontSize='40px' fontFamily='bolder'>India</Text>
         <Divider marginBottom='20px'/>

           {
            data.map((news) => 
            <Flex key={news.id} gap='10px' marginTop='10px'   marginBottom='30px'>
              <Box w='25%'  >
                <Image  boxSize='full' h='150px' src={news.urlToImage}/>
              </Box>
              <Box w='75%' >
               <Text fontSize='25px' marginBottom='20px'>{news.title}</Text>
               
                <Text>{news.content}</Text>
                <Text>{news.description}</Text>
              </Box>

            </Flex>
            )
           }
         </GridItem>
         <GridItem colSpan={1} w='100%' h='20' bg='blue.500'></GridItem>
         <Flex>
         <Button disabled={page === 1} onClick={() => setPage(page - 1 )}>-</Button>
         <Button>{page}</Button>
         <Button onClick={() => setPage(page + 1 )}>+</Button>

         </Flex>
         </Grid>
         
      </Container>
    )
}
export default India