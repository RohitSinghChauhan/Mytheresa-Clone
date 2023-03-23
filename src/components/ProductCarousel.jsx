import { Box, Text, Image, Stack, Flex, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCarousel = ({ products, category, start, end }) => {

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <SimpleGrid columns={['2', '2', '4', '4']} justifyContent='space-between' alignItems='center'>
                        {products.filter((item, i) => (item.category === category)).filter((e, i) => i < 4).map((item) => (
                            <Box key={item.id} w={['99%', '99%', '95%', '95%']}>
                                <Link to={`/${item.id}`}>
                                    <Image src={item.image} alt='someimg' />
                                </Link>
                                <Stack spacing='0' alignItems='center' justifyContent='center' mt={1}>
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
                        {products.filter((item, i) => (item.category === category)).filter((e, i) => i >= 4 && i <= 8).map((item) => (
                            <Box key={item.id} w={['99%', '99%', '95%', '95%']}>
                                <Link to={`/${item.id}`}>
                                    <Image src={item.image} alt='someimg' />
                                </Link>
                                <Stack spacing='0' alignItems='center' justifyContent='center' mt={1}>
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

                {/* <Carousel.Item>
                    <Flex justifyContent='space-between' alignItems='center'>
                        {products.filter((item) => (item.category === category)).map((item) => (
                            <Box key={item.id} w='20%'>
                                <Link to={`/${item.id}`}>
                                    <Image src={item.image} alt='someimg' />
                                </Link>
                                <Stack spacing='0' alignItems='center' justifyContent='center' mt={1}>
                                    <Box h='3vh' overflow='hidden'>
                                        <Text textAlign='center' textTransform='uppercase' fontSize={15}> {item.title}</Text>
                                    </Box>
                                    <Text as='b' fontSize={13}>₹{item.price}</Text>
                                </Stack>
                            </Box>
                        ))
                        }
                    </Flex>
                </Carousel.Item> */}
            </Carousel >
        </>
    )
}

export default ProductCarousel;