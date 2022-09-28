import React from 'react'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Box w='75%' margin='auto' mb={12}>
            <Stack spacing={8} >
                <Flex h={{ lg: '71vh', md: '40vh', sm: '40vh' }} w='100%' backgroundPosition='center' backgroundSize='cover' backgroundImage={'https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_TAB_2x_20220908102602.jpg?imwidth=1024&imdensity=1'}>
                    <Flex width='50%' justifyContent='center' alignItems='center'>
                        <Text color='white' fontSize={{ lg: '3.6rem', md: '2rem', sm: '2rem' }} fontWeight='none'><Link to='/women'>Women</Link></Text>
                    </Flex>
                    <Flex width='50%' justifyContent='center' alignItems='center'>
                        <Text color='white' fontSize={{ lg: '3.6rem', md: '2rem', sm: '2rem' }} fontWeight='none'><Link to='/men'>Men</Link></Text>
                    </Flex>
                </Flex>

                <Flex h={{ lg: '47vh', md: '22.5vh', sm: '22vh' }} w='100%' backgroundPosition='center' backgroundSize={{ lg: 'cover', md: 'contain' }} backgroundImage={'https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_KIDS_DSK_2x_20220908102616.jpg?imwidth=1180&imdensity=1'}>
                    <Flex width='100%' justifyContent='center' alignItems='center'>
                        <Text color='white' fontSize={{ lg: '4rem', md: '2rem', sm: '2rem' }} fontWeight='none'><Link to='/men'>Kids</Link></Text>
                    </Flex>
                </Flex>

                <Flex h={{ lg: '47vh', md: '22.5vh', sm: '22vh' }} w='100%' backgroundPosition='center' backgroundSize={{ lg: 'cover', md: 'contain' }} backgroundImage={'https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_LIFE_DSK_2x_20220908102608.jpg?imwidth=1180&imdensity=1'}>
                    <Flex width='100%' justifyContent='center' alignItems='center'>
                        <Text color='white' fontSize={{ lg: '4rem', md: '2rem', sm: '2rem' }} fontWeight='none'><Link to='/life'>Life</Link></Text>
                    </Flex>
                </Flex>
            </Stack>
        </Box>
    )
}

export default Home