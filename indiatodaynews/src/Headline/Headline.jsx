import {useState, useEffect} from "react"
import { Box, Container, Grid, GridItem, Image, Text, Divider, List, ListItem, ListIcon, OrderedList, UnorderedList, VStack, Button, Stack, useControllableState } from "@chakra-ui/react";

import {Icon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import { getHeadline } from "../Middle/Api/api";
 

function Headline(){
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

   const fetchNews= (page) => {
    getHeadline({page, pageSize: 1}).then((res) => 
    setData(res.data.articles))
   }

    useEffect(() => {
        fetchNews(page)
    },[page])

   // console.log(data)
return (
<Box maxW='full' >

    <Grid 
     
    templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(1, 1fr)',
        lg: 'repeat(1, 1fr)'
    }}
    border="1px solid red"
     
   
    >
     
        {
            data.map((news) => 
             <GridItem key={news.id} textAlign='left' w='100%'>
                <Box 
                 
                 border='1px solid green'
                   w='100%'
                  p={6}
                 margin='auto'
                >
                    <VStack>
                    <Text textAlign='centre' fontSize='22px' >Top Headlines</Text>
                    <Box>
                <Image  boxSize='400px' w='550px' h='300px' src={news.urlToImage}/>
                </Box>
                <Divider/>
                <Box w='70%'>
                <Text fontSize='30px' marginLeft='5px'>{news.title}</Text>  
                </Box> 
                <Divider/>
                 
               
                <Box color="blue" textAlign='right' marginRight='10px'>
                    <Link  >MORE FROM MOVIES</Link>
                </Box>
                    </VStack>
                </Box>
                
             </GridItem>
             
            )
        }
        <Stack margin='auto'  spacing={4} direction='row' marginTop='10px' >
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>-</Button>
        <Button>{page}</Button>
       <Button onClick={() => setPage(page + 1)}>+</Button>

        </Stack>
    
    </Grid>
    
</Box>
 
)
}
export default Headline