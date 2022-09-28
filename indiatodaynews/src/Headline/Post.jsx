import { useEffect } from "react"
import { useState } from "react"
import { getData } from "../Middle/Api/api"
import {Box, Divider, Text} from '@chakra-ui/react'

function Post() {
const [data, setData] = useState([])


useEffect(() => {
getData().then((res) => setData(res.data.articles))
},[])
    console.log(data)
return (
    <div className="post">
        <Box  >
        <Text display='flex' textAlign='centre' fontSize='22px' margin='auto' justifyContent='center' >Top Stories</Text>

        </Box>
      {
        data.map((post) => 
        <Box key={post.id}>
      <Text>{post.title}</Text>
      <Divider/>
        </Box>
        )
      }
    </div>
)
}
export default Post