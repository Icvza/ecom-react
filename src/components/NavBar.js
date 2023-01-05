import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-no-background.png'

function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const [isHidden, setIsHidden] = useState(true)

    function handleClick(event) {
        setIsOpen(!isOpen)
        setIsHidden(!isHidden)
    }

    function handleLogoClick(event) {
        console.log()
        return (
            <NavLink to="/"> </NavLink>
        )
    }



    const hamStackClasses = `z-40 block hamburger mr-4 md:hidden focus:outline-none ${isOpen ? 'open' : ''}`
    const menuClasses = `absolute top-0  bottom-0 left-0 ${isHidden ? 'hidden' : ''} flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-2 text-lg text-white uppercase bg-black`

    return (
        <nav className="flex items-center justify-between font-bold text-white bg-black">
            <NavLink to="/"><img className="h-32 p-6 hover:object-scale-down hover:scale-105 duration-200" onClick={handleLogoClick} src={logo} alt="Logo" /> </NavLink>
            <div className="hidden h-10 font-alata md:flex md:space-x-8 pr-9">

                <div className="group">
                    <NavLink to="shop">
                        <p href="./shop.html">Shop</p>
                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </NavLink>
                </div>

                <div className="group">
                    <NavLink to="contact">
                        <p href="./contact.html">Contact</p>
                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </NavLink>
                </div>

                <div className="group">
                    <NavLink to="/">
                        <p href="./index.html">Home</p>
                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </NavLink>
                </div>

            </div>

            <div className="md:hidden">
                <button id="ham-stack" type="button" className={hamStackClasses} onClick={handleClick}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>
            <div id="menu" className={menuClasses}>
                <NavLink to="shop" onClick={handleClick} className="hover:text-blue-300">Shop</NavLink>
                <br />
                <NavLink to="contact" onClick={handleClick} className="hover:text-blue-300">Contact</NavLink>
                <br />
                <NavLink to="/" onClick={handleClick} className="hover:text-blue-300">Home</NavLink>
            </div>
        </nav>
    )
}

export default NavBar
