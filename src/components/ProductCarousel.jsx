import { Box, Text, Image, Stack, Flex } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProductCarousel = ({ products, category }) => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <Flex justifyContent='space-between' alignItems='center'>                        {
                        products.filter(item => item.category === category).filter((item, i) => (i < 4)).map((item, i) => (
                            <Box key={i + 1}>
                                <Image src={item.images[0]} alt='someimg' />
                                <Stack spacing='0' alignItems='center' justifyContent='center' mt={1}>
                                    <Box h='3vh' overflow='hidden'>
                                        <Text textAlign='center' textTransform='uppercase' fontSize={15}> {item.title}</Text>
                                    </Box>
                                    <Text as='b' fontSize={13}>₹{item.strike_price}</Text>
                                </Stack>
                            </Box>
                        ))
                    }
                    </Flex>
                </Carousel.Item>

                <Carousel.Item>
                    <Flex justifyContent='space-between' alignItems='center'>
                        {
                            products.filter(item => item.category === category).filter((item, i) => (i > 4 && i < 9)).map((item, i) => (
                                <Box key={i + 1}>
                                    <Image src={item.images[0]} alt='someimg' />
                                    <Stack spacing='0' alignItems='center' justifyContent='center' mt={1}>
                                        <Box h='3vh' overflow='hidden'>
                                            <Text textAlign='center' textTransform='uppercase' fontSize={15}> {item.title}</Text>
                                        </Box>
                                        <Text as='b' fontSize={13}>₹{item.strike_price}</Text>
                                    </Stack>
                                </Box>
                            ))
                        }
                    </Flex>
                </Carousel.Item>

                <Carousel.Item>
                    <Flex justifyContent='space-between' alignItems='center'>
                        {
                            products.filter(item => item.category === category).filter((item, i) => (i > 9 && i < 14)).map((item, i) => (
                                <Box key={i + 1}>
                                    <Image src={item.images[0]} alt='someimg' />
                                    <Stack spacing='0' alignItems='center' justifyContent='center' mt={1}>
                                        <Box h='3vh' overflow='hidden'>
                                            <Text textAlign='center' textTransform='uppercase' fontSize={15}> {item.title}</Text>
                                        </Box>
                                        <Text as='b' fontSize={13}>₹{item.strike_price}</Text>
                                    </Stack>
                                </Box>
                            ))
                        }
                    </Flex>
                </Carousel.Item>
            </Carousel >
        </>
    )
}

export default ProductCarousel;