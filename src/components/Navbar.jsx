import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">Inicio</a>
                <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item dropdown active">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Nuestra Institución
                            </a>
                            <ul className="dropdown-menu multi-level dropdown-content" role="menu" aria-labelledby="dropdownMenu">
                                <li><a class="dropdown-item" href="#">CETis 28</a></li>
                                <div className="dropdown-divider"></div>
                                <li><a class="dropdown-item" href="#">Orientación Educativa</a></li>
                                <li className="divider"></li>
                                <li className="dropdown-submenu">
                                    <a class="dropdown-item" tabIndex="-1" href="#">Hover me for more options</a>
                                    <ul className="dropdown-menu">
                                    <li><a tabIndex="-1" href="#">Second level</a></li>
                                    <li className="dropdown-submenu">
                                        <a href="#">Even More..</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">3rd level</a></li>
                                            <li><a href="#">3rd level</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Second level</a></li>
                                    <li><a href="#">Second level</a></li>
                                    </ul>
                                </li>
                            </ul> 
                        </li>
                        <li className="nav-item dropdown active">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Oferta Académica
                            </a>
                            <ul className="dropdown-menu multi-level dropdown-content navbar-sub-menu" role="menu" aria-labelledby="dropdownMenu">
                                <li><a class="dropdown-item navbar-text" href="#">Programación</a></li>
                                <div className="dropdown-divider"></div>
                                <li><a class="dropdown-item navbar-text" href="#">Contabilidad</a></li>
                                <div className="dropdown-divider"></div>
                                <li><a class="dropdown-item navbar-text" href="#">Trabajo Social</a></li>
                                <div className="dropdown-divider"></div>
                                <li><a class="dropdown-item navbar-text" href="#">Laboratorista Químico</a></li>
                                <div className="dropdown-divider"></div>
                                <li><a class="dropdown-item navbar-text" href="#">Ofimática</a></li>
                                <div className="dropdown-divider"></div>
                                <li><a class="dropdown-item navbar-text" href="#">Mantenimiento Automotriz</a></li>
                                
                            </ul> 
                        </li>
                        <li className="nav-item dropdown active">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Transparencia
                            </a>
                            <ul className="dropdown-menu multi-level dropdown-content" role="menu" aria-labelledby="dropdownMenu">
                                <li><a href="#">Some action</a></li>
                                <li><a href="#">Some other action</a></li>
                                <li className="divider"></li>
                                <li className="dropdown-submenu">
                                    <a tabIndex="-1" href="#">Hover me for more options</a>
                                    <ul className="dropdown-menu">
                                    <li><a tabIndex="-1" href="#">Second level</a></li>
                                    <li className="dropdown-submenu">
                                        <a href="#">Even More..</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">3rd level</a></li>
                                            <li><a href="#">3rd level</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Second level</a></li>
                                    <li><a href="#">Second level</a></li>
                                    </ul>
                                </li>
                            </ul> 
                        </li>    
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;