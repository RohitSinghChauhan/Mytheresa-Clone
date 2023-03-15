import { Box, Stack, Input, GridItem, Text, Flex, Button, SimpleGrid, Divider, Image } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

function Footer() {
    return (<Box w={{ base: '100%', lg: '100%', md: '100%', sm: '100%' }} margin='auto' mt={['1rem', '1rem', '1rem', '2rem']}>

        <Divider mb={{ lg: '7', md: '3', sm: '3' }} />

        <Stack justifyContent='center' alignItems='center' mb={{ base: '1rem', sm: '1.9rem', md: '1.7rem' }}>
            <Text fontSize={['12', '15', '15', '17']}>SHOP WHENEVER, WHEREVER WITH THE APP</Text>
            <Image w={{ base: '80vw', lg: '35vw', md: '23vw', sm: '50vw' }} cursor='pointer' src='https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png' alt='downloadable' />
        </Stack>

        <Divider mt={{ lg: '7', md: '3', sm: '3' }} mb={2} />

        <SimpleGrid columns={{ base: '1', lg: '3', md: '1', sm: '1' }} spacing={['6', '70', '70', '70']} m='auto' w={{ base: '80%' }}>
            <GridItem width={{ lg: '20vw', md: 'full', sm: 'full' }} display={{ lg: 'inline-block', md: 'none', sm: 'none' }}>
                <Stack spacing={3}>
                    <Text fontSize={{ base: '14' }}>SERVICE & SECURITY</Text>
                    <Stack spacing={3} fontSize={{ base: '14' }}>
                        <Box>
                            <Text as='b'>Fast delivery</Text>
                            <Text color='gray'>Delivery within 2 business days</Text>
                        </Box>
                        <Box>
                            <Text as='b'>Free returns within 30 days</Text>
                            <Text color='gray'>Convenient return service</Text>
                        </Box>
                        <Box>
                            <Text as='b'>Secure payment and data protection</Text>
                            <Text color='gray'>SSL enccryption for secure transactions and personal data</Text>
                        </Box>
                    </Stack>
                </Stack>
            </GridItem>

            <GridItem width={{ lg: '30vw', md: 'full', sm: 'full' }} mb={{ base: '-1rem' }} display={{ lg: 'inline-block', md: 'none', sm: 'none' }}>
                <Stack spacing={1}>
                    <Box fontSize={{ base: '13' }}>
                        <Text as='b'>CUSTOMER </Text>
                        <Text as='b'>CARE</Text>
                    </Box>
                    <Stack spacing={1} fontSize={['13', '13', '16', '16']} color='gray'>
                        <Text>Contact us</Text>
                        <Text>Shipping information</Text>
                        <Text>Secure payment</Text>
                        <Text>Exchanges</Text>
                        <Text>Returns</Text>
                        <Text>After sale service</Text>
                        <Text>Gift card</Text>
                    </Stack>
                </Stack>
            </GridItem>

            <GridItem width={{ lg: '30vw', md: 'full', sm: 'full' }} alignItems='center' margin={{ lg: 'none', md: 'auto', sm: 'auto' }}>
                <Stack spacing={['4', '4', '6', '6']} justifyContent='space-around' direction={{ base: 'column', sm: 'row', lg: 'column', md: 'row' }}>
                    <Stack spacing={0} w='100%' display={{ base: 'none' }}>
                        <Text w={{ lg: '', md: '36vw', sm: '34vw' }}>GET TREND UPDATES, STYLE TIPS AND MORE</Text>
                        <Flex w={{ base: '70vw', lg: '', md: '33vw', sm: '37vw' }}>
                            <Input h='4vh' w={['100%', '26vw', '26vw', '26vw']} borderRadius='none' placeholder="Your email address" />
                            <Button h='4vh' borderRadius='none' fontFamily='monospace' fontWeight='0'>SIGN UP</Button>
                        </Flex>
                    </Stack>

                    <Stack spacing={3} display={{ base: 'none' }}>
                        <Text as='b'>Wish list</Text>
                        <Text color='gray'>Receive personal notifications</Text>
                    </Stack>

                    <Stack>
                        <Text fontWeight={{ sm: '600' }} fontSize={{ sm: '1.6rem' }}>Follow us on</Text>
                        <Flex gap={2} cursor='pointer'>
                            <AiFillLinkedin size='1.5rem' />
                            <AiFillFacebook size='1.5rem' />
                            <AiFillTwitterSquare size='1.5rem' />
                            <AiFillInstagram size='1.5rem' />
                            <AiFillYoutube size='1.5rem' />
                        </Flex>
                    </Stack>
                </Stack>
            </GridItem>
        </SimpleGrid>

        <Divider mt={{ base: '1rem', lg: '7', md: '3', sm: '3' }} mb={1} />

        <Flex w='100%' fontFamily='monospace' fontSize={['.5rem', '.9rem', '.9rem', '1efrem']} justifyContent={['space-around', 'space-around', 'space-around', 'space-around']} alignItems='center'>
            <Text color='black'>copyright © 2006-2022 mytheresa.com</Text>
            <Flex gap={{ base: '1', lg: '4', md: '3', sm: '3' }} color='black'>
                <Text>Terms of use</Text>
                <Text>Privacy policy</Text>
            </Flex>
        </Flex>
    </Box >
    )
}

export default Footer;