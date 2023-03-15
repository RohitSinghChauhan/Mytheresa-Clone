import { useEffect, useState } from 'react'
import { Box, Flex, Text, Button, Stack, Center, Grid, GridItem, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ProductCarousel from '../components/ProductCarousel'
import axios from 'axios'

const getData = () => {
    return axios.get(`https://lazy-blue-panda-gear.cyclic.app/products`);
}

const Womens = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Box w={{ lg: '75%', md: '100%', sm: '100%' }} margin='auto'>
            <Link to='/womenproducts'>
                <Flex h={{ base: '34vh', lg: '71vh', md: '48vh', sm: '48vh' }} pb={10} justifyContent='flex-end' direction='column' alignItems='center' w='100%' backgroundPosition='center' backgroundSize='cover' backgroundImage={'https://img.mytheresa.com/media/static/raw/cms/l/WW_Moncler_Bigs/Moncler_MayaJacket_Act_Big_desktop_1_x2_20220928145617.jpg?imwidth=1180&imdensity=1'}>
                </Flex>
            </Link>

            <Flex mt={['.9rem', '2.4rem', '2.4rem', '2.4rem']} mb={['.8rem', '1.6rem', '1.6rem', '1.6rem']} padding='1.8rem 0 1.8rem 0' bgColor='blackAlpha.100' direction='column' justifyContent='space-around' alignItems='center'>
                <Text fontSize={['1rem', '1rem', '1rem', '1.5rem']} wordSpacing={1}>DON'T MISS OUT</Text>
                <Text fontSize={['1.7rem', '2.2rem', '2.2rem', '4.8rem']} fontWeight='400'>New Arrivals</Text>
                <Text color='gray' fontSize={['1rem', '1.1rem', '1.1rem', '1.1rem']}>McCartney, Moncler, Loewe, Oseree</Text>
                <Link to='/womenproducts'>
                    <Button mt={['1.2rem', '1rem', '1rem', '1.2rem']} colorScheme='blackAlpha' maxW={{ lg: '7vw', md: '10vw', sm: '14vw', base: '47vw' }} h={8} fontSize={{ base: '12', lg: '14', md: '11', sm: '12' }} bgColor='blackAlpha.800' borderRadius='none' color='white'>SHOP NOW</Button>
                </Link>
            </Flex>

            <Box>
                <Flex h={{ lg: '24vh', md: '19vh', sm: '19vh' }} justifyContent='space-around' alignItems='center'>
                    <Flex direction='column' mb={{ base: '1rem' }} alignItems='center'>
                        <Text fontSize='0.9rem'>THE BRIBAL EDIT</Text>
                        <Box w={{ lg: '30vw', md: '24vw' }}>
                            <Text textAlign='center' fontSize={{ lg: '1.8rem', md: '1.2rem', sm: '1.3rem', base: '1.1rem' }}>Your down-the-aisle outfit is ready for you</Text>
                        </Box>
                    </Flex>
                    <Flex direction='column' display={{ base: 'none' }} alignItems='center'>
                        <Text fontSize='0.9rem'>A WARM WELCOME</Text>
                        <Box w={{ lg: '30vw', md: '24vw' }}>
                            <Text textAlign='center' fontSize={{ lg: '1.8rem', md: '1.2rem', sm: '1.3rem' }}>To your favorite coats of the new season</Text>
                        </Box>
                    </Flex>
                </Flex>

                <Grid gap={3} w='100%' h={{ md: '100vh', sm: '122vh', lg: '128vh', base: '80vh' }} templateRows='repeat(2,1fr)' templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)']}>
                    <GridItem rowSpan={2} bgColor='red' w='100%' backgroundPosition='center' backgroundSize='cover' backgroundImage='https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW39/ActboxTall-Bridal_2x_20220926130913.jpg?imwidth=600&imdensity=1'>
                    </GridItem>

                    <GridItem display={['none', 'inline-block', 'inline-block', 'inline-block']}>
                        <Image h={{ base: '15vh', sm: '40vh' }} src='https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW39/CW39_ActboxSmall_2x__20220926130949.jpg?imwidth=600&imdensity=1' alt='one' />
                        <Flex borderBottom='1px solid gray' h={{ lg: '15vh', md: '10vh', sm: '15vh' }} direction='column' justifyContent='center' alignItems='center'>
                            <Link to='/womenproducts'>
                                <Button colorScheme='blackAlpha' maxW={{ lg: '7vw', md: '10vw', sm: '14vw', base: '14vw' }} h={8} fontSize={{ lg: '13', md: '11', sm: '11', base: '9' }} bgColor='blackAlpha.800' borderRadius='none' color='white'>SHOP NOW</Button>
                            </Link>
                        </Flex>
                    </GridItem>

                    <GridItem w='100%' display={['none', 'inline-block', 'inline-block', 'inline-block']}>
                        <Flex h={{ lg: '30vh', md: '12vh', sm: '40vh', base: '40vh' }} direction='column' justifyContent='center' alignItems='center'>
                            <Stack w={['30vw', '50vw', '30vw', '30vw']} justifyContent='center' alignItems='center'>
                                <Text fontSize={{ lg: '1.1rem', md: '0.9rem', sm: '1rem', base: '.9rem' }}>GEMS AND JEWELRY</Text>
                                <Text textAlign='center' fontSize={{ lg: '1.8rem', md: '1.1rem', sm: '1.5rem' }}>Crystals are everyone's best friend</Text>
                            </Stack>
                        </Flex>
                        <Image src='https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW39/CW39_ActboxSmall_2x_2_20220926130943.jpg?imwidth=600&imdensity=1' alt='two' />
                    </GridItem>
                </Grid >

                <Flex borderBottom='1px solid black' h={{ base: '15vh', sm: '18vh', lg: '18vh', md: '25vh' }} justifyContent='space-around' alignItems='center'>
                    <Flex mt={{ lg: '0', md: '5rem' }}>
                        <Link to='/womenproducts'>
                            <Button colorScheme='blackAlpha' maxW={{ lg: '7vw', md: '10vw', sm: '14vw', base: '47vw' }} h={8} fontSize={{ lg: '13', md: '11', sm: '8' }} bgColor='blackAlpha.800' borderRadius='none' color='white'>SHOP NOW</Button>
                        </Link>
                    </Flex>
                    <Flex mt={{ lg: '0', md: '5rem' }} display={{ base: 'none' }}>
                        <Link to='/womenproducts'>
                            <Button colorScheme='blackAlpha' maxW={{ lg: '7vw', md: '10vw', sm: '14vw' }} h={8} fontSize={{ lg: '13', md: '11', sm: '11' }} bgColor='blackAlpha.800' borderRadius='none' color='white'>SHOP NOW</Button>
                        </Link>
                    </Flex>
                </Flex>
            </Box>

            <Box display={{ base: 'none' }} mt={{ lg: '2rem', md: '1rem', sm: '1rem' }} mb={12} pt={5}>
                <Stack spacing={{ lg: '1', md: '0', sm: '0' }} margin='auto' justifyContent='center' alignItems='center' width='40vw'>
                    <Text fontSize='0.9rem'>A MUTED MOMENT</Text>
                    <Text fontSize={{ lg: '2.1rem', md: '1.2rem', sm: '1.5rem' }} textAlign='center'>Pieces to wear with everything, everywhere</Text>
                </Stack>
                <Box mb={{ lg: '2.3rem', md: '0.8rem', sm: '0.8rem' }}></Box>
                <ProductCarousel products={data} category='women' />
                <Center>
                    <Link to='/womenProducts'>
                        <Button colorScheme='blackAlpha' maxW={{ lg: '7vw', md: '10vw', sm: '14vw', base: '47vw' }} h={8} fontSize={{ lg: '13', md: '11', sm: '8' }} bgColor='blackAlpha.800' borderRadius='none' color='white'>SHOP NOW</Button>
                    </Link>
                </Center>
            </Box>

        </Box >
    )
}

export default Womens;