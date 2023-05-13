import { Box, HStack } from "@chakra-ui/react";

const logo = require('../images/logo.png');

const header = () => {
    return (
        <header className='header'>
            <Box top={0} left={0} right={0} backgroundColor="white">
                <Box>
                    <HStack>
                        <nav>
                            <img src={logo} alt="logo" />
                        </nav>
                        <nav>
                            <HStack spacing={40}>
                                <a href="#home" className="navBarLink menu-text">HOME</a>
                                <a href="#about" className="navBarLink menu-text">ABOUT</a>
                                <a href="#menu" className="navBarLink menu-text">MENU</a>
                                <a href="#reserv" className="navBarLink menu-text">RESERVATIONS</a>
                                <a href="#order" className="navBarLink menu-text">ORDER ONLINE</a>
                                <a href="#login" className="navBarLink menu-text">LOGIN</a>
                            </HStack>
                        </nav>
                    </HStack>
                </Box>
            </Box>
        </header>
    )
}

export default header;