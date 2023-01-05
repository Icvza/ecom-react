import React from 'react'
import selfimg from '../assets/IMG_2177.jpg'
import Slider from '../components/Slider'

function Home() {
    return (
        <>
            <Slider />
            <section id="feature">
                <div className="relative container md:flex lg:flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 flex-row md:px-0">
                    <div className="w-full  md:w-2/3 h-auto">
                        <img className="rounded-tr-extraLarge rounded-bl-extraLarge" src={selfimg} alt="Isaac" />
                    </div>
                    <div className="top-48 pr-0 bg-white lg:absolute lg:right-0 md:py-20 md:pl-20">
                        <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
                            Learn more about me
                        </h2>
                        <p className="max-w-md text-center md:text-left">
                            After fours years of providing great experiences for clients, working for the most prominent electronic retailer in the world, and mastering the art of mounting TVs, I decided to start my own mounting company
                        </p>
                    </div>
                </div>
            </section>
        </>


    )
}
export default Home 
