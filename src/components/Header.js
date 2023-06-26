import { useState } from "react";
import {Link} from "react-router-dom";

const Title = () => (
    <a href="/">
        <img id="logo" alt="logo" src="https://media.cnn.com/api/v1/images/stellar/prod/190625084159-20190625-pizza-hut-logo-new.jpg?q=w_3000,h_1688,x_0,y_0,c_fill"/>
    </a>
);

const Header = () => {
    const [isLogedIn, setIsLogedIn] = useState(false);
    return (
        <div className="nav-bar">
            <Title/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="./About">About Us</Link></li>
                <li><Link to="./Contact">Contact Us</Link></li>
                <li>Cart</li>
            </ul>
            {isLogedIn ? <button id="login-btn" onClick={() => setIsLogedIn(false)}>Logout</button> : <button id="login-btn" onClick={() => setIsLogedIn(true)}>Login</button>}
        </div>
    );
}
export default Header;