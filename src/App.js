import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ContactUs } from "./pages/ContactUs";
import { SignUp } from "./pages/SignUp";
import "./App.scss";

export function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}