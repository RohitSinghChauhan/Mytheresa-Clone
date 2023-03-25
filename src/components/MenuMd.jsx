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
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
            <MenuList>
                <MenuGroup title='Links'>
                    <MenuItem><Link to='/mens'>Men</Link></MenuItem>
                    <MenuItem><Link to='/womens'>Women</Link></MenuItem>
                    <MenuItem><Link to='/kids'>Kids</Link></MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Account'>
                    <MenuItem>
                        <Link to='/login'>My Account</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/signUpPage'>Sign Up</Link>
                    </MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    </>)
}