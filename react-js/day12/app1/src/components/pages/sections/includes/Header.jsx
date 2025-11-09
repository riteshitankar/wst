import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="header" style={{backgroundColor:'lightblue'}}>
            <h1>This is the header</h1>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <Link to={'/website'}>Website</Link>
                    <Link to={'/service/web-design'}>Web-design</Link>
                    <Link to={'/service/web-development'}>Web-development</Link>
                    <Link to={'/service/react-app-dev'}>React-app-dev</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header