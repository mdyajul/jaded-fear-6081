import { Container, Grid, GridItem, Box,Text,Image, Flex } from "@chakra-ui/react";

function Footer(){
    return (
        <Box  bg='blackAlpha.800' color='white' w='100%' h='100vh' marginTop='20px'>
<Grid 
w='90%'
templateColumns={{
    base: 'repeat(3, 1fr)',
    md: 'repeat(3, 1fr)',
    lg: 'repeat(6, 1fr)'
}}
 
fontSize='11px'
margin='auto'
p={10}
lineHeight='27px'

>
    <GridItem >
        <Box >
            <Text fontSize='15px' fontWeight='bold' >PUBLICATION:</Text> 
            <ul>Business Today</ul>
            <ul>Cosmopolitan</ul>
            <ul>India Today - Hindi</ul>
            <ul>India Today</ul>
            <ul>Mail Today</ul>
            <ul>Money Today</ul>
            <ul>Reader's Today</ul>
            <ul>Time</ul>

        </Box> 
    </GridItem>
    <GridItem>
    <Box>
    <Box>
            <Text fontSize='15px' fontWeight='bold' >TELEVISION:</Text> 
            <ul>Aaj Tak</ul>
            <ul>Delehi Asj Tak</ul>
            <ul>Good News Today</ul>
            <ul>India Today TV</ul>
            <Text fontSize='15px' fontWeight='bold' marginTop='20px' >RADIO:</Text> 

            <ul>Ishq FM</ul>
            <Text fontSize='15px' fontWeight='bold' marginTop='20px' >GAMING:</Text> 
            <ul>India Today Gaming</ul>
            <ul>World Esports Cup</ul>
            <ul>Esports Premier League</ul>

        </Box> 

        </Box>
    </GridItem>
    <GridItem>
    <Box>
            <Text fontSize='15px' fontWeight='bold' >EDUCATION:</Text> 
            <ul>India Today Education</ul> 
            <ul>Vasant Valley</ul>
            <ul>Best Colleges India 2018</ul>
            <ul>Best Universities India 2018</ul>
            <ul>Aajtak Campus National</ul>
            <ul>Aptitude test</ul>
             
             
            <Text fontSize='15px' fontWeight='bold' marginTop='20px' >ONLINE SHOPPING:</Text> 


        </Box>
    </GridItem>
    <GridItem>
    <Box>
            <Text fontSize='15px' fontWeight='bold' >EVENTS:</Text> 
            <ul>Agenda Aajtak</ul> 
            <ul>India Today Conclave</ul>
            <ul>Robb Report India 2018</ul>
            <ul>Sahitya Aaj Tak</ul>
            <ul>The Red Lab</ul>
             

        </Box>
    </GridItem>
    <GridItem>
    <Box>
    <Text fontSize='15px' fontWeight='bold' >PRINTING</Text> 
 
            <ul>Thomson Press</ul>
             
            <Text fontSize='15px' fontWeight='bold' marginTop='20px'>WELFARE:</Text> 

            <ul>Care Today</ul>
             
            <Text fontSize='15px' fontWeight='bold' marginTop='20px' >MUSIC:</Text> 

            <ul>Music Today</ul>

        </Box>
    </GridItem>
    <GridItem>
    <Box>
    <Text fontSize='15px' fontWeight='bold' >SYNDICATION:</Text> 

            <ul>India content</ul>
            <ul>Headlines Today</ul>
             
            <Text fontSize='15px' fontWeight='bold' marginTop='20px' >DISTRIBUTION:</Text> 

            <ul>Rate Card</ul>
            <Text fontSize='15px' fontWeight='bold' marginTop='20px'>USEFUL LINKS:</Text> 

            <ul>Partners</ul>
            <ul>Press Release</ul>
            <ul>Sitemap</ul>
            <ul>News</ul>
            <ul>Newsletter</ul>
            <ul>Privacy Policy</ul>
            <ul>Correction Policy</ul>
        </Box>
    </GridItem>

</Grid>
 <Box w='70%' gap={5}  display='flex' margin='auto' alignItems='center' justifyContent='center'>
    <Image src='https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg'/>
    <Image src='https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg'/>
    <Image src='https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg'/>

 </Box>
        </Box> 
    )
}

export default Footer