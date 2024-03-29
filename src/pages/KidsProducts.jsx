import { Box, Flex, SimpleGrid, Text, Image, Center, Badge, Spinner } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react'
import { getData } from '../utils/data';
import AllProductsLayout from '../utils/AllProductsLayout'
import { AuthContext } from '../context/AuthContext/AuthContext'
import { Link } from 'react-router-dom';

const KidsProducts = () => {
    const [data, setData] = useState([]);
    const { state, dispatch } = useContext(AuthContext);

    const handleGetData = () => {
        dispatch({ type: 'LOADING', payload: true });

        getData({
            category: 'Child'
        })
            .then(res => {
                dispatch({ type: 'LOADING', payload: false })
                setData(res.data)
            })
            .catch(err => {
                dispatch({ type: 'LOADING', payload: false })
                dispatch({ type: 'ERROR' })
            });
    }

    useEffect(() => {
        handleGetData();
    }, [])

    return (
        <Box w={{ base: '100%', lg: '75%', md: '100%', sm: '100%' }} margin='auto' mt={-5}>
            <AllProductsLayout />

            {state.isLoading &&
                <Flex h='100vh' direction='column' justifyContent='center' alignItems='center'>
                    <Spinner size='xl' />
                </Flex>
            }

            <Center>
                <SimpleGrid columns={{ base: '2', lg: '3', md: '3', sm: '2' }} spacing={{ base: '50', lg: '9', md: '20', sm: '20' }}>
                    {data && data.map((item) =>
                        <Flex key={item.id} w='20vw' direction='column' justifyContent='center' alignItems='center'>
                            <Link to={`/kidsproducts/${item.id}`}>
                                <Image src={item.image} alt='someimage' />
                            </Link>                            <Text>{item.title}</Text>
                            <Badge fontSize='0.9rem'>₹{item.price}</Badge>
                        </Flex>
                    )}
                </SimpleGrid>
            </Center>
        </Box>
    )
}

export default KidsProducts;