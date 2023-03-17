import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Stack, Button, Center } from '@chakra-ui/react'
import ProductCarousel from '../components/ProductCarousel'
import axios from 'axios'
import { Link } from 'react-router-dom'

const getData = () => {
    return axios.get(`https://lazy-blue-panda-gear.cyclic.app/products`);
}

const Kids = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Box w={{ lg: '75%', md: '100%', sm: '100%', base: '98%' }} margin='auto'>

            <Flex h={{ lg: '85vh', md: '70vh', sm: '53vh', base: '27vh' }} justifyContent='space-between' alignItems='center'>
                <Flex h='100%' w='49.5%' direction='column' justifyContent='center' alignItems='flex-end' pb='5rem' backgroundPosition='center' backgroundSize='cover' backgroundImage='https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_CW37/Kids-HP_September_Girl-desktop_2x_20220912144223.jpg?imwidth=1180&imdensity=1'>
                    <Stack spacing={['-4', '5', '5', '5']} justifyContent='center' alignItems='center'>
                        <Link to='/kidsproducts'>
                            <Button colorScheme='black' bgColor='black' maxW={{ lg: '8vw', md: '10vw', sm: '16vw', base: '25vw' }} h={['6', '8', '8', '8']} fontSize={['10', '13', '13', '13']} borderRadius='none' color='white' fontWeight='700'>SHOP NOW</Button>
                        </Link>
                    </Stack>
                </Flex>

                <Flex h='100%' w='49.5%' direction='column' justifyContent='flex-end' alignItems='flex-start' pb='5rem' backgroundPosition='center' backgroundSize='cover' backgroundImage='https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_CW37/Kids-HP_September_Boy-desktop_2x_20220912144214.jpg?imwidth=1180&imdensity=1'>
                    <Stack spacing={['-4', '5', '5', '5']} justifyContent='center' alignItems='center'>
                        <Link to='/kidsproducts'>
                            <Button colorScheme='white' bgColor='white' maxW={{ lg: '8vw', md: '10vw', sm: '16vw', base: '25vw' }} h={['6', '8', '8', '8']} fontSize={['10', '13', '13', '13']} borderRadius='none' color='blackAlpha.800' fontWeight='700'>SHOP NOW</Button>
                        </Link>
                    </Stack>
                </Flex>
            </Flex>

            <Flex h={{ lg: '34vh', md: '23vh', sm: '14rem' }} mt={['1.2rem', '2.4rem', '2.4rem', '2.4rem']} mb={['1.5rem', '1.6rem', '1.6rem', '1.6rem']} direction='column' justifyContent='center' alignItems='center' backgroundPosition='center' backgroundSize='cover' backgroundImage='https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_SEPTEMBER/Homepage_Kids_BabyBanner_desktop_2x_20220830111456.jpg?imwidth=1180&imdensity=1'>
                <Stack spacing={['7', '5', '5', '5']} justifyContent='center' alignItems='center'>
                    <Text mt={['1rem', '1rem', '1rem', '1rem']} color='black' fontSize={{ lg: '3.3rem', md: '2.5rem', sm: '2.5rem' }}>Kids</Text>
                    <Link to='/kidsproducts'>
                        <Button mb={['1rem', '1rem', '1rem', '1rem']} colorScheme='white' bgColor='white' maxW={{ lg: '8vw', md: '10vw', sm: '16vw', base: '25vw' }} h={['6', '8', '8', '8']} fontSize={['10', '13', '13', '13']} borderRadius='none' color='blackAlpha.800' mt='1.2rem' fontWeight='700'>SHOP NOW</Button>
                    </Link>
                </Stack>
            </Flex>

            <Flex h={{ lg: '45vh', md: '40vh', sm: '46vh', base: '27vh' }} justifyContent='space-between' alignItems='center'>
                <Flex h='100%' w='49.5%' direction='column' justifyContent='flex-end' alignItems='center' pb='1rem' backgroundPosition='center' backgroundSize='cover' backgroundImage='https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/12_Kids/PocketBanners/SS22/CW30_Pocket_Coats___Jackets_20220818143153.jpg'>
                    <Stack spacing={['-5', '5', '5', '5']} justifyContent='center' alignItems='center'>
                        <Text fontSize={{ lg: '3.3rem', md: '2.5rem', sm: '2.5rem', base: '2rem' }} color='white'>Boys</Text>
                        <Link to='/kidsproducts'>
                            <Button colorScheme='white' bgColor='white' maxW={{ lg: '8vw', md: '10vw', sm: '16vw', base: '25vw' }} h={['6', '8', '8', '8']} fontSize={['10', '13', '13', '13']} borderRadius='none' color='blackAlpha.800' mt='1.2rem' fontWeight='700'>SHOP NOW</Button>
                        </Link>
                    </Stack>
                </Flex>

                <Flex h='100%' w='49.5%' direction='column' justifyContent='flex-end' alignItems='center' pb='1rem' backgroundPosition='center' backgroundSize='cover' backgroundImage='https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/12_Kids/PocketBanners/FW22/CW38_PB_BabyDresses_Image_20220921093314.jpg'>
                    <Stack spacing={['-5', '5', '5', '5']} justifyContent='center' alignItems='center'>
                        <Text fontSize={{ lg: '3.3rem', md: '2.5rem', sm: '2.5rem', base: '2rem' }} color='white'>Girls</Text>
                        <Link to='/kidsproducts'>
                            <Button colorScheme='white' bgColor='white' maxW={{ lg: '8vw', md: '10vw', sm: '16vw', base: '25vw' }} h={['6', '8', '8', '8']} fontSize={['10', '13', '13', '13']} borderRadius='none' color='blackAlpha.800' mt='1.2rem' fontWeight='700'>SHOP NOW</Button>
                        </Link>
                    </Stack>
                </Flex>
            </Flex>

            <Box mt={['1.8rem', '2rem', '2rem', '2rem']} mb={12}>
                <Text color='blackAlpha.800' fontSize={25} mb='1rem' textAlign='center'>NEW ARRIVALS</Text>
                <ProductCarousel products={data} category='kids' />
                <Center>
                    <Link to='/kidsproducts'>
                        <Button colorScheme='blackAlpha' maxW={{ lg: '8vw', md: '10vw', sm: '16vw' }} h={8} fontSize={13} bgColor='blackAlpha.800' borderRadius='none' color='white' mt='1.6rem'>VIEW ALL</Button>
                    </Link>
                </Center>
            </Box>

        </Box>
    )
}

export default Kids