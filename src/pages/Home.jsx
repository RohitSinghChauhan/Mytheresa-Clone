import React, { useEffect, useState } from 'react'
import { Box, Center, Flex, Stack, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';
import axios from 'axios';

const getData = () => {
    return axios.get(`https://pacific-wildwood-24158.herokuapp.com/clothing`);
}

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    // for (let i = 0; i < data.length; i++) {
    //     if (data[i].category === 'Womens') {
    //         console.log('Hellcat')
    //     }
    // }

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

            <Stack spacing={10} mt={10}>
                <Box>
                    <Text color='blackAlpha.800' letterSpacing={1} fontSize={30} mb='2rem' textAlign='center'>Women's New Arrivals</Text>
                    <ProductCarousel products={data} category='Womens' />
                    <Center>
                        <Link to='/women'>
                            <Button colorScheme='blackAlpha' maxW={{ lg: '6vw', md: '10vw', sm: '9vw' }} h={8} fontSize={13} bgColor='blackAlpha.800' borderRadius='none' color='white' mt='1.6rem' w='10vw'>VIEW ALL</Button>
                        </Link>
                    </Center>
                </Box>

                <Box>
                    <Text color='blackAlpha.800' letterSpacing={1} fontSize={30} mb='2rem' textAlign='center'>Men's New Arrivals</Text>
                    <ProductCarousel products={data} category='Mens' />
                    <Center>
                        <Link to='/men'>
                            <Button colorScheme='blackAlpha' maxW={{ lg: '6vw', md: '10vw', sm: '9vw' }} h={8} fontSize={13} bgColor='blackAlpha.800' borderRadius='none' color='white' mt='1.6rem' w='10vw'>VIEW ALL</Button>
                        </Link>
                    </Center>
                </Box>

                <Box>
                    <Text color='blackAlpha.800' letterSpacing={1} fontSize={30} mb='2rem' textAlign='center'>Kids's New Arrivals</Text>
                    <ProductCarousel products={data} category='Child' />
                    <Center>
                        <Link to='/kid'>
                            <Button colorScheme='blackAlpha' maxW={{ lg: '6vw', md: '10vw', sm: '9vw' }} h={8} fontSize={13} bgColor='blackAlpha.800' borderRadius='none' color='white' mt='1.6rem' w='10vw'>VIEW ALL</Button>
                        </Link>
                    </Center>
                </Box>
            </Stack >

        </Box >
    )
}

export default Home