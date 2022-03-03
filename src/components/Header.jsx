import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="header">

            <img width="250px" className="header_logo ml-50" src="logo-sep.png" alt="header"/>
            <div className="div header_logo">
                <img className="img" src="portada-halcones2.png" alt="header"/>
            </div>
            <img className="header_logo mr-50" src="logo-dgeti.png" alt="header"/>

        </div>
    )
}

export default Header;