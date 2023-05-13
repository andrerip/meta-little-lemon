import { Box, VStack, Stack } from "@chakra-ui/react";

const footer = () => {
    return (
        <footer className="footer">
            <nav>
                <Stack direction='row' verticalAlign='top'>
                    <VStack spacing={8}>
                        <p className="menu-text">Doormat Navigation</p>
                        <a href="#home">HOME</a>
                        <a href="#about">ABOUT</a>
                        <a href="#menu">MENU</a>
                        <a href="#reserv">RESERVATIONS</a>
                        <a href="#order">ORDER ONLINE</a>
                        <a href="#login">LOGIN</a>
                    </VStack>
                    <VStack spacing={8}>
                        <p className="menu-text">Contact</p>
                        <a href="#address">Address</a>
                        <a href="#phone">Phone number</a>
                        <a href="#email">Email</a>
                    </VStack>
                    <VStack spacing={8}>
                        <p className="menu-text">Social Media Links</p>
                        <a href="#facebook">Facebook</a>
                        <a href="#twitter">Twitter</a>
                        <a href="#instagram">Instagram</a>
                    </VStack>
                </Stack>
            </nav>
        </footer>
    )
}

export default footer;