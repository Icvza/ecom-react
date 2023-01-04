import React from 'react'
import instagram from '../assets/icon-instagram.svg'
import twitter from '../assets/icon-twitter.svg'
import facebook from '../assets/icon-facebook.svg'
import { NavLink } from 'react-router-dom'


function Footer() {
    return (
        <>
            <div className="bg-black">
                <div className="container max-w-6xl py-10 mx-auto">
                    <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                        <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
                            <div className="h-8">
                                <h1 className="text-white w-44 md:ml-3 text-center md:text-left lg:text-left font-bold">Mountingly</h1>
                            </div> 
                            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y:0 md:space-x-6 md:ml-3">
                                <div className="h-10 mt-4 group">
                                <NavLink to="/"   className="hover:text-blue-300">Home</NavLink>
                                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                                </div>
                                <div className="h-10 group">
                                <NavLink to="shop"  className="hover:text-blue-300">Shop</NavLink>
                                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                                </div>
                                <div className="h-10 group">
                                <NavLink to="contact"  className="hover:text-blue-300">Contact</NavLink>
                                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
                            <div className="flex items-center justify-center space-x-4 mx-auto md:justify-end md:mx-0">
                                <div className="h-8-group">
                                    <p href="https://twitter.com">
                                        <img src={twitter} alt="" className="h-6"/>
                                    </p>
                                </div>
                                <div className="h-8-group">
                                    <p href="https://facebook.com">
                                        <img src={facebook} alt="" className="h-6"/>
                                    </p>
                                </div>
                                <div className={"h-8-group"}>
                                    <p href="https://www.instagram.com/">
                                        <img src={instagram} alt="" className="h-6"/>
                                    </p>
                                </div>
                            </div>
                            <div className="font-bold mr-5">
                                &copy; 2022 Mountingly
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default Footer
