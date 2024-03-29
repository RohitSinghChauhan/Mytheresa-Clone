import { Box, Stack, Flex, Text, Spacer, Image } from '@chakra-ui/react';
import { NavLink, Link } from 'react-router-dom';
import styles from '../modules/navbar.module.css';
import MenuMd from '../components/MenuMd';

export default function Navbar() {

    const links = [
        {
            path: '/womens',
            title: "WOMEN"
        },
        {
            path: '/mens',
            title: "MEN"
        },
        {
            path: '/kids',
            title: "KIDS"
        },
        {
            title: "LIFE"
        }
    ]

    return (
        <Box mb={7} boxShadow='rgba(0, 0, 0, 0.04) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;'>
            <Stack w={{ base: '100%', lg: '75%', md: '90%', sm: '90%' }} h={{ lg: '23vh' }} margin='auto'>
                <Flex display={{ base: 'none', lg: 'flex', md: 'none', sm: 'none' }} justifyContent='space-between' alignItems='center' mt={3} mb={2}>
                    <Flex gap='1.2rem' fontSize='0.9rem'>
                        {
                            links.map(link =>
                                <NavLink key={link.title} className={({ isActive }) =>
                                    isActive ? styles.linkActive : styles.linkDefault
                                } to={link.path}>
                                    {link.title}
                                </NavLink>
                            )
                        }
                    </Flex>

                    <Flex fontSize='0.75rem' as='b' color='blackAlpha.700' gap='3.5rem'>
                        <Link to='/login'>
                            <Text letterSpacing={1} cursor='pointer'>My account</Text>
                        </Link>
                        <Link to='/signuppage'>
                            <Text letterSpacing={1} cursor='pointer'>Sign Up</Text>
                        </Link>
                    </Flex>
                </Flex>

                <Spacer display={['none', 'none', 'inline-block', 'inline-block']} />

                <Flex w='100%' justifyContent='space-around' alignItems='center'>
                    <Box display={{ lg: 'none', md: 'inline-block', sm: 'inline-block', base: 'inline-block' }}><MenuMd /></Box>
                    <Spacer display={['none', 'none', 'none', 'inline-block']} />
                    <Box pl={{ lg: '8rem', md: '0', sm: '0' }}>
                        <Link to='/'>
                            <Image w={['40vw', '28vw', '23vw', '18vw']} cursor='pointer' src='https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220906T141618' alt='mytheresa' />
                        </Link>
                    </Box>
                    <Spacer display={['none', 'none', 'none', 'inline-block']} />
                    <Flex gap={2} alignItems='center' cursor='pointer'>
                        <Link to='/shoppingcart'>
                            <Text display={{ base: 'none', lg: 'inline-block', md: 'none', sm: 'none' }} fontSize='0.9rem'>SHOPPING BAG</Text>
                        </Link>
                        <Link to='/shoppingcart'>
                            <Box>
                                <Image h={{ base: '4vh', lg: '4.7vh', md: '4vh', sm: '4vh' }} src='https://img.icons8.com/ios/2x/shopping-bag--v3.png' />
                            </Box>
                        </Link>
                    </Flex>
                </Flex>

                <Spacer />
            </Stack>
        </Box >
    )
}