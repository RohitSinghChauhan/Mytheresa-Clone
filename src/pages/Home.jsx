import { useEffect, useState } from 'react'
import { Box, Center, Flex, Stack, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';
import axios from 'axios';

const getData = () => {
    return axios.get(`https://confused-jade-crown.cyclic.app/products`);
}

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <Box w={['97%', '97%', '90%', '84%']} margin='auto'>
            <Stack spacing={['1', '1', '8', '8']} >
                <Flex h={{ base: '27vh', lg: '78vh', md: '70vh', sm: '40vh' }} w='100%' backgroundPosition='center' backgroundSize='cover' backgroundImage={'https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_TAB_2x_20220908102602.jpg?imwidth=1024&imdensity=1'}>
                    <Flex width='50%' justifyContent='center' alignItems='center'>
                        <Link to='/womens'><Text color='white' fontSize={{ lg: '3.6rem', md: '2rem', sm: '2rem' }} fontWeight='none'>Women</Text></Link>
                    </Flex>
                    <Flex width='50%' justifyContent='center' alignItems='center'>
                        <Link to='/mens'><Text color='white' fontSize={{ lg: '3.6rem', md: '2rem', sm: '2rem' }} fontWeight='none'>Men</Text></Link>
                    </Flex>
                </Flex>

                <Flex h={{ base: '27vh', lg: '52vh', md: '45vh', sm: '41vh' }} w={{ lg: '100%', md: '100%' }} backgroundPosition='center' backgroundSize={{ base: 'cover', sm: 'cover', lg: 'cover', md: 'cover' }} backgroundImage={{ base: 'https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2lkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2lkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60', sm: 'https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2lkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60', lg: 'https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_KIDS_DSK_2x_20220908102616.jpg?imwidth=1180&imdensity=1', md: 'https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_KIDS_DSK_2x_20220908102616.jpg?imwidth=1180&imdensity=1' }}>
                    <Flex width='100%' justifyContent='center' alignItems='center'>
                        <Link to='/kids'><Text color='white' fontSize={{ base: '2rem', lg: '4rem', md: '2rem', sm: '2rem' }} fontWeight='none'>Kids</Text></Link>
                    </Flex>
                </Flex>

                <Flex h={{ base: '25vh', lg: '35vh', md: '45vh', sm: '40vh' }} w={{ lg: '100%', md: '100%' }} backgroundPosition={{ lg: 'center' }} backgroundSize={{ base: 'cover', sm: 'cover', lg: 'cover', md: 'cover' }} backgroundImage={{ base: 'https://plus.unsplash.com/premium_photo-1675986842336-a1162f4c788b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8a2lkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60', md: 'https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_LIFE_DSK_2x_20220908102608.jpg?imwidth=1180&imdensity=1', lg: 'https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_LIFE_DSK_2x_20220908102608.jpg?imwidth=1180&imdensity=1' }}>
                    <Flex width='100%' justifyContent='center' alignItems='center'>
                        <Text color='white' fontSize={{ base: '2rem', lg: '4rem', md: '2rem', sm: '2rem' }} fontWeight='none'>Life</Text>
                    </Flex>
                </Flex>
            </Stack>

            <Stack m={['auto', 'auto', 'none', 'none']} spacing={10} pt={['4', "4", '10', '10']}>
                <Box >
                    <Text color='blackAlpha.800' letterSpacing={1} fontSize={['21', '30', '30', '30']} mb='2rem' textAlign='center'>Women's New Arrivals</Text>
                    <ProductCarousel products={data} category='Womens' />
                    <Flex w='100%' justify='center' alignItems='center'>
                        <Link to='/womenproducts'>
                            <Button colorScheme='blackAlpha' w={{ lg: '6vw', md: '10vw', sm: '4rem', base: '3rem' }} h={8} fontSize={['8', '10', '13', '13']} bgColor='blackAlpha.800' borderRadius='none' color='white' mt='1.6rem'>VIEW ALL</Button>
                        </Link>
                    </Flex>
                </Box>

                <Box>
                    <Text color='blackAlpha.800' letterSpacing={1} fontSize={['21', '30', '30', '30']} mb='2rem' textAlign='center'>Men's New Arrivals</Text>
                    <ProductCarousel products={data} category='Mens' />
                    <Center>
                        <Link to='/menproducts'>
                            <Button colorScheme='blackAlpha' w={{ lg: '6vw', md: '10vw', sm: '4rem', base: '3rem' }} h={8} fontSize={['8', '10', '13', '13']} bgColor='blackAlpha.800' borderRadius='none' color='white' mt='1.6rem'>VIEW ALL</Button>
                        </Link>
                    </Center>
                </Box>

                <Box>
                    <Text color='blackAlpha.800' letterSpacing={1} fontSize={['21', '30', '30', '30']} mb='2rem' textAlign='center'>Kids's New Arrivals</Text>
                    <ProductCarousel products={data} category='Child' />
                    <Center>
                        <Link to='/kidsproducts'>
                            <Button colorScheme='blackAlpha' w={{ lg: '6vw', md: '10vw', sm: '4rem', base: '3rem' }} h={8} fontSize={['8', '10', '13', '13']} bgColor='blackAlpha.800' borderRadius='none' color='white' mt='1.6rem'>VIEW ALL</Button>
                        </Link>
                    </Center>
                </Box>
            </Stack >

        </Box >
    )
}

export default Home;