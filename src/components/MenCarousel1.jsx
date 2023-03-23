import { Box, Text, Image, Stack, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenCarousel1 = ({ products, category }) => {

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <SimpleGrid columns={['2', '2', '4', '4']} justifyContent='space-between' alignItems='center'>
                        {products.filter(item => item.category === category).filter((item, i) => (i >= 0 && i < 4)).map((item, i) => (
                            <Box key={item.id} w={['99%', '99%', '95%', '95%']}>
                                <Link to={`/${item.id}`}>
                                    <Image src={item.image} alt='someimg' />
                                </Link>                                <Stack spacing='0' alignItems='center' justifyContent='center' mt={1}>
                                    <Box h='3vh' overflow='hidden'>
                                        <Text textAlign='center' textTransform='uppercase' fontSize={15}> {item.title}</Text>
                                    </Box>
                                    <Text as='b' fontSize={13}>₹{item.price}</Text>
                                </Stack>
                            </Box>
                        ))
                        }
                    </SimpleGrid>
                </Carousel.Item>

                <Carousel.Item>
                    <SimpleGrid columns={['2', '2', '4', '4']} justifyContent='space-between' alignItems='center'>
                        {
                            products.filter(item => item.category === category).filter((item, i) => (i >= 4 && i <= 7)).map((item, i) => (
                                <Box key={item.id} w={['99%', '99%', '95%', '95%']}>
                                    <Link to={`/${item.id}`}>
                                        <Image src={item.image} alt='someimg' />
                                    </Link>                                    <Stack spacing='0' alignItems='center' justifyContent='center' mt={1}>
                                        <Box h='3vh' overflow='hidden'>
                                            <Text textAlign='center' textTransform='uppercase' fontSize={15}> {item.title}</Text>
                                        </Box>
                                        <Text as='b' fontSize={13}>₹{item.price}</Text>
                                    </Stack>
                                </Box>
                            ))
                        }
                    </SimpleGrid>
                </Carousel.Item>
            </Carousel >
        </>
    )
}

export default MenCarousel1;