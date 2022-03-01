import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.scss";

export function Dropdown() {
    return (
        <ul className="dropdown">
            <li className="dropdown-item">
                <Link to="/" className="dropdown-link">Home</Link>
            </li>
            <li className="dropdown-item">
                <Link to="/about" className="dropdown-link">About</Link>
            </li>
            <li className="dropdown-item">
                <Link to="/contact-us" className="dropdown-link">Contact</Link>
            </li>
            <li className="dropdown-item">
                <Link to="/services" className="dropdown-link">services</Link>
            </li>
        </ul>
    )
}