import { Box, Flex, Stack, Text   } from "@chakra-ui/layout"
import {Image, Skeleton, SkeletonText} from '@chakra-ui/react'
import {useState, useEffect} from "react"
import { getBusinessRead } from "../Api/api"

function BusinessRead() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    const fetchWorldRead = (page) => {
        getBusinessRead({page,  pageSize: 5}).then((res) => setData(res.data.articles))
    
      }

      useEffect(() => {
        fetchWorldRead(page)
      },[page])
      console.log(data)
    return (
        <Box border='1px solid gray' >
            <Box display='flex' gap='20px' alignItems='center' p={2}>
            <Text color='red' fontSize='25px' as='b'>Read This</Text> 
            <Skeleton w='40%' startColor='gray.200' endColor='gray.500' height='10px' />
            </Box>
            
         {
            data.map((news) => 
            <Flex key={news.id} gap='10px' marginTop='10px' borderBottom='1px solid gray' p={4}>

                <Box w='75%'  >
                <Text fontSize='20px' marginBottom='20px'>{news.title}</Text>
                
               
              </Box>
              <Box w='25%' >
              <Image  boxSize='full' h='100px' src={news.urlToImage}/>

              </Box>
              
            </Flex>
            ) 
         }
        </Box>
       
    )
}
export default BusinessRead