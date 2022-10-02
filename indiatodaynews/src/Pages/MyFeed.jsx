import Footer from "../Headline/Footer"
import {useState, useEffect} from "react"
import { Box,  Grid, GridItem, Image, Text, VStack,  Stack} from "@chakra-ui/react";
import { getFeed } from "./Api/api";


function MyFeed() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

 const fetchNews= (page) => {
  getFeed({page, pageSize: 1}).then((res) => 
  setData(res.data.articles))
 }

  useEffect(() => {
      fetchNews(page)
  },[page])

 // console.log(data)
    return (
      <>
      <Box w='100%'  >
      <Box maxW='full' >

<Grid 
 
templateColumns={{
    base: 'repeat(1, 1fr)',
    md: 'repeat(1, 1fr)',
    lg: 'repeat(1, 1fr)'
}}
border="1px solid gray"
 

>
 
    {
        data.map((news) => 
         <GridItem key={news.id}  w='100%'>
            <Box 
             
             
               w='100%'
              p={2}
             margin='auto'
            >
                <VStack>
                <Text textAlign='centre' fontSize='35px' fontFamily='bold'>News Of The Day</Text>
                <Box>
            <Image  boxSize='full' w='700px' h='300px'  src={news.urlToImage}/>
            </Box>
            <hr/>
            <Box w='70%'>
            <Text fontSize='30px' marginLeft='5px'>{news.title}</Text>  
            </Box> 
            <hr/>
               
                </VStack>
            </Box>
            
         </GridItem>
         
        )
    }
    <Stack margin='auto'  spacing={4} direction='row' marginTop='10px' marginBottom='10px'>
    <button disabled={page === 1} onClick={() => setPage(page - 1)} style={{backgroundColor:'#a00606', color:'white', padding:'8px 15px', borderRadius:'10px'}}>Prev</button>
    <button style={{backgroundColor:'#a00606', color:'white', padding:'8px 15px', borderRadius:'10px'}}>{page}</button>
   <button onClick={() => setPage(page + 1)} style={{backgroundColor:'#a00606', color:'white', padding:'8px 15px', borderRadius:'10px'}}>Next</button>

    </Stack>

</Grid>

</Box>
      </Box>
      <Footer/>
      </>
    )
}
export default MyFeed