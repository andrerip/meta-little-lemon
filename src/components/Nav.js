import React from "react";
import { HStack } from "@chakra-ui/react";

const Nav = () => {
    return (
        <nav>
            <HStack spacing={40}>
                <a href="#home" className="navBarLink menu-text">HOME</a>
                <a href="#about" className="navBarLink menu-text">ABOUT</a>
                <a href="#menu" className="navBarLink menu-text">MENU</a>
                <a href="#reserv" className="navBarLink menu-text">RESERVATIONS</a>
                <a href="#order" className="navBarLink menu-text">ORDER ONLINE</a>
                <a href="#login" className="navBarLink menu-text">LOGIN</a>
            </HStack>
        </nav >
    )
};
export default Nav;