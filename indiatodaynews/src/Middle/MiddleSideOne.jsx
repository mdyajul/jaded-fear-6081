import { Box, Container, Grid, GridItem, Image, Text, Divider, List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react";
import { getData } from "./Api/api";
import {useState, useEffect} from 'react'
import {Icon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";

function MiddleSideOne() {
    const [data, setData] = useState([])

     
    useEffect(() => {
        getData().then((res) => setData(res.data.articles
            ))
    },[])
   // console.log(data)
return <Container w='full'>
    <Grid 
    w='full'
    templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(1, 1fr)',
        lg: 'repeat(1, 1fr)'
    }}
    
    gap={6}
    >
        <Text textAlign='centre' fontSize='30px' margin='auto'  >Health</Text>
        {
            data.map((news) => 
             <GridItem key={news.id} textAlign='left'   h='700px' overflow='hidden' >
                 
                <Box>
                <Image boxSize='full' h='250px' src={news.urlToImage}/>
                </Box>
                <hr/>
                <Box>
                <Text fontSize='22px' marginLeft='5px'>{news.title}</Text>  
                </Box> 
                <hr/>
                 
                <UnorderedList marginBottom='50px'>
                    <ListItem color='red' marginLeft='10px' fontSize='17px'>         
                        <Text color='black'>{news.content}</Text>
                    </ListItem>
                    <hr/>
                    <ListItem color='red' marginLeft='10px' fontSize='17px'>         
                        <Text color='black'>{news.description}</Text>
                    </ListItem>
                </UnorderedList>
                <Box color="blue" textAlign='right' marginRight='20px'>
                    <Link to={`/${news.id}`} >MORE FROM Healths</Link>
                </Box>
             </GridItem>
            )
        }

    </Grid>
</Container>
}
export default MiddleSideOne;