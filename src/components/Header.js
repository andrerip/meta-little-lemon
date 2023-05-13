
const logo = require('../images/logo.png');

const header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#menu">MENU</a></li>
                    <li><a href="#reserv">RESERVATIONS</a></li>
                    <li><a href="#order">ORDER ONLINE</a></li>
                    <li><a href="#login">LOGIN</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default header;