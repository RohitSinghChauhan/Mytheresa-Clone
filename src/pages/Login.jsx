import { useContext, useReducer } from 'react'
import { Box, Stack, FormControl, Flex, Input, FormLabel, Text, Button } from '@chakra-ui/react'
import PasswordInput from '../utils/PasswordInput'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext/AuthContext'

const postData = (formData = {}) => {
    return axios.post(`https://gray-adventurous-cow.cyclic.app/user/login`, formData);
}

const initState = {
    email: '',
    password: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'EMAIL':
            return { ...state, email: action.payload };
        case 'PASSWORD':
            return { ...state, password: action.payload };
        case 'RESET_TO_INITSTATE':
            return initState;
        default:
            return state;
    }
}

const Login = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const navigate = useNavigate();
    const { dispatch: authDispatcher } = useContext(AuthContext);

    const handleInputPassword = (value) => {
        dispatch({ type: 'PASSWORD', payload: value })
    }

    const handleSubmit = () => {
        postData(state)
            .then(res => {
                if (res.data.token) {
                    navigate('/')
                    authDispatcher({ type: 'SUCCESS' })
                }
                else {
                    alert('Incorrect credentials!');
                }
            })
            .catch(err => console.log(err));

        dispatch({ type: 'RESET_TO_INITSTATE' })
    }

    return (
        <Box w={{ lg: '100%', md: '100%', sm: '100%', base: '98%' }} h={['80vh', '75vh', '75vh', '75vh']} margin='auto' mt={10} mb={['10', '10', '8', '-10']}>
            <Flex h='100%' direction='column' justifyContent='center' alignItems='center'>
                <Stack w={{ lg: '38vw', md: '70vw', sm: '70vw', base: '90vw' }} margin='auto' spacing={7}>
                    <Stack>
                        <Text>Fill up the fields with valid details.</Text>
                    </Stack>

                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>Email address</FormLabel>
                            <Input name='name' value={state.email} onChange={e => dispatch({ type: 'EMAIL', payload: e.target.value })} type='email' placeholder='Enter email' borderRadius='0' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <PasswordInput name={'password'} value={state.password} handleInputPassword={handleInputPassword} />
                        </FormControl>
                    </Stack>
                    <Text as='u'>Forgot Your Password?</Text>
                </Stack>

                <Stack w={{ lg: '38vw', md: '70vw', sm: '70vw', base: '90vw' }} margin='auto' mt={1} spacing={{ lg: '2', md: '4', sm: '3' }}>
                    <Button onClick={handleSubmit} borderRadius='0' w={{ lg: '7vw', md: '12vw', sm: '12vw', base: '25vw' }} fontSize='0.9rem' bgColor='green.500' colorScheme='green' color='white' mb='1rem'>LOG IN</Button>
                    <Text color='gray' fontSize={['0.8rem', '0.8rem', '1rem', '1rem']}>At Mytheresa, we keep your information secure. As a result, it will be necessary for you to log in to your account before you are able to place an order or change the information on your account.
                        You will be asked to log in to complete your order even if you have already been greeted on the website.
                    </Text>
                </Stack>
            </Flex>
        </Box>
    )
}

export default Login;