import React from 'react'
import selfimg from '../assets/IMG_2177.jpg'

function Home() {
    return (
        <>

<section id="hero">
        {/* <!-- Hero Container --> */}
        <div class="container max-w-6xl mx-auto px-6 py-12">
            {/* <!-- Menu/Logo Continer --> */}

            {/* <!-- Do: Mobile menu --> */}
            <div id="menu" class="absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-2 text-lg text-white uppercase bg-black">
                <a href="./shop.html" class="hover:text-blue-300">Shop</a>
                <a href="./contact.html" class="hover:text-blue-300">Contact</a>
                <a href="./index.html" class="hover:text-blue-300">Home</a>
            </div>
            <div
                class="max-w-lg mt-32 mb-32 p-4 font-bold font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:ml-auto md:mr-0 md:text-6xl">
                Better ingredients better tv mounting
            </div>
            <div class="flex justify-center">   
                <div class="space-y-6">
                    <span class="hover:bg-gray-600 cursor-pointer h-4 w-4 m-auto bg-black rounded-full inline-block" onClick="currentSlide(1)"></span>
                    <span class="hover:bg-gray-600 cursor-pointer h-4 w-4 m-auto bg-black rounded-full inline-block" onClick="currentSlide(2)"></span>
                    <span class="hover:bg-gray-600 cursor-pointer h-4 w-4 m-auto bg-black rounded-full inline-block" onClick="currentSlide(3)"></span>
                </div>
            </div>
        </div>
    </section>

            <section id="feature">
                <div class="relative container md:flex lg:flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 flex-row md:px-0">
                    {/* <!-- My image  --> */}
                    <div class="w-full  md:w-2/3 h-auto">
                        <img class="rounded-tr-extraLarge rounded-bl-extraLarge" src={selfimg} alt="Isaac" />
                    </div>
                    {/* <!-- Text Container --> */}
                    <div class="top-48 pr-0 bg-white lg:absolute lg:right-0 md:py-20 md:pl-20">
                        <h2 class="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
                            Learn more about me
                        </h2>
                        <p class="max-w-md text-center md:text-left">
                            After fours years of providing great experiences for clients, working for the most prominent electronic retailer in the world, and mastering the art of mounting TVs, I decided to start my own mounting company
                        </p>
                    </div>
                </div>
            </section>
        </>


    )
}
export default Home 
