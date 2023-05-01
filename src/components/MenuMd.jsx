import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export default function MenuMd() {
    return (<>
        <Menu width='2rem'>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
            <MenuList>
                <MenuGroup title='Links'>
                    <Link to='/mens'><MenuItem>Men</MenuItem></Link>
                    <Link to='/womens'><MenuItem>Women</MenuItem></Link>
                    <Link to='/kids'><MenuItem>Kids</MenuItem></Link>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Account'>
                    <Link to='/login'>
                        <MenuItem>
                            My Account
                        </MenuItem></Link>
                    <Link to='/signUpPage'>
                        <MenuItem>
                            Sign Up
                        </MenuItem>
                    </Link>
                </MenuGroup>
            </MenuList>
        </Menu>
    </>)
}