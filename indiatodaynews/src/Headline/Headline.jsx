import {useState, useEffect} from "react"
import { Box, Container, Grid, GridItem, Image, Text, Divider, List, ListItem, ListIcon, OrderedList, UnorderedList, VStack, Button, Stack, useControllableState } from "@chakra-ui/react";

import {Icon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import { getHeadline } from "../Middle/Api/api";
import Post from "./Post";

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
<Container maxW='full' >

    <Grid 
    w='full'
    templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(1, 1fr)',
        lg: 'repeat(1, 1fr)'
    }}
    border="1px solid red"
     
    p={10}
    >
     
        {
            data.map((news) => 
             <GridItem key={news.id} textAlign='left' w='100%'>
                <Box 
                 
                 border='1px solid green'
                   w='100%'
                  maxW='50%' 
                 margin='auto'
                >
                    <VStack>
                    <Text textAlign='centre' fontSize='22px' >Top Headlines</Text>
                    <Box>
                <Image  boxSize='full' src={news.urlToImage}/>
                </Box>
                <Divider/>
                <Box>
                <Text fontSize='22px' marginLeft='5px'>{news.title}</Text>  
                </Box> 
                <Divider/>
                 
               
                <Box color="blue" textAlign='right' marginRight='20px'>
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
    
</Container>
 
)
}
export default Headline