import { Box, HStack } from "@chakra-ui/react";
import Nav from './Nav';

const logo = require('../images/logo.png');

const header = () => {
    return (
        <header className='header'>
            <Box top={0} left={0} right={0} backgroundColor="white">
                <Box>
                    <HStack>
                        <img src={logo} alt="logo" />
                        <Nav />
                    </HStack>
                </Box>
            </Box>
        </header>
    )
}

export default header;