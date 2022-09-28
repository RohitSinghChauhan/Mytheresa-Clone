import { Box, Stack, Flex, Text, Spacer, Image, Center } from '@chakra-ui/react';
import { NavLink, Link } from 'react-router-dom';
import styles from '../modules/navbar.module.css';
import MenuMd from '../components/MenuMd';

export default function Navbar() {

    const links = [
        {
            path: '/women',
            title: "WOMEN"
        },
        {
            path: '/men',
            title: "MEN"
        },
        {
            path: '/kid',
            title: "KIDS"
        },
        {
            path: '/life',
            title: "LIFE"
        }
    ]

    return (
        <Box mb={7} boxShadow='rgba(0, 0, 0, 0.04) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;'>
            <Stack w='75%' h={{ lg: '23vh', md: '8vh' }} margin='auto'>
                <Flex display={{ lg: 'flex', md: 'none', sm: 'none' }} justifyContent='space-between' alignItems='center' mt={3} mb={2}>
                    <Flex gap='1.2rem' fontSize='0.9rem'>
                        {
                            links.map(link =>
                                <NavLink className={({ isActive }) =>
                                    isActive ? styles.linkActive : styles.linkDefault
                                } key={link.path} to={link.path}>
                                    {link.title}
                                </NavLink>
                            )
                        }
                    </Flex>

                    <Flex fontSize='0.75rem' as='b' color='blackAlpha.700' gap='4rem'>
                        <Text letterSpacing={1} cursor='pointer'>Signup for Newsletter</Text>
                        <Text letterSpacing={1} cursor='pointer'>My account</Text>
                        <Text letterSpacing={1} cursor='pointer'>My wishlist</Text>
                    </Flex>
                </Flex>

                <Spacer />
                <Flex alignItems='center'>
                    <Box display={{ lg: 'none', md: 'inline-block', sm: 'inline-block' }}><MenuMd /></Box>
                    <Spacer />
                    <Box pl={{ lg: '8rem', md: '0', sm: '0' }}>
                        <Link to='/'>
                            <Image w='18vw' cursor='pointer' src='https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220906T141618' alt='mytheresa' />
                        </Link>
                    </Box>
                    <Spacer />
                    <Flex gap={2} alignItems='center' cursor='pointer'>
                        <Text display={{ lg: 'inline-block', md: 'none', sm: 'none' }} fontSize='0.9rem'>SHOPPING BAG</Text>
                        <Box>
                            <Image h={{ lg: '4.7vh', md: '4vh', sm: '4vh' }} src='https://img.icons8.com/ios/2x/shopping-bag--v3.png' />
                        </Box>
                    </Flex>
                </Flex>
                <Spacer />
            </Stack>
        </Box >
    )
}