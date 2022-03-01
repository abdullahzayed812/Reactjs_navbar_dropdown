import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";
import "./Navbar.scss";

export function Navbar() {
    const [click, setClick] = useState(true);
    const [activeDropdown, setActiveDropdown] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }
    const showDropdown = () => {
        setActiveDropdown(true);
    }
    const hideDropdown = () => {
        setActiveDropdown(false);
    }

    return (
        <header className="main-header">
            <section className="container">
                <div className="logo">
                    <Link to="/">EPIC</Link>
                </div>
                <nav className={click ? "navbar active" : "navbar"}>
                    <section className="nav-links">
                        <Link
                            to="/"
                            className="link"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="link"
                            onClick={closeMobileMenu}
                        >
                            About
                        </Link>
                        <Link
                            to="/services"
                            className="link serv"
                            onClick={closeMobileMenu}
                            onMouseEnter={showDropdown}
                            onMouseLeave={hideDropdown}
                        >
                            Services
                            <i className="fas fa-caret-down down" />
                            {activeDropdown && <Dropdown />}
                        </Link>
                        <Link
                            to="/contact-us"
                            className="link"
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </Link>
                    </section>
                    <Link to="sign-up" className="button">
                        <button type="button">
                            Sign Up
                        </button>
                    </Link>
                </nav>
                <div className="menu-icon">
                <i class="fa-solid fa-xmark"></i>
                    <i className="fas fa-solid fa-bars" onClick={handleClick}/>
                </div>
            </section>
        </header>
    )
}