import React, { useState }from 'react'
import firstImg from  '../assets/chauhan-moniz-3A0bs74T8zc-unsplash.jpg'


function Slider() {

    const [bkGround, setBkGround] = useState('chauhan-moniz-3A0bs74T8zc-unsplash.jpg')

    function changeBackgroundImage (newImageUrl)  {
        setBkGround(newImageUrl)
    }
    return (
        <section id="hero" style={{ backgroundImage: `url(${bkGround})` }}>
            <div className="container max-w-6xl mx-auto px-6 py-12">
                <div id="menu" className="absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-2 text-lg text-white uppercase bg-black">
                    <a href="./shop.html" className="hover:text-blue-300">Shop</a>
                    <a href="./contact.html" className="hover:text-blue-300">Contact</a>
                    <a href="./index.html" className="hover:text-blue-300">Home</a>
                </div>
                <div
                    className="max-w-lg mt-32 mb-32 p-4 font-bold font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:ml-auto md:mr-0 md:text-6xl">
                    Better ingredients better tv mounting
                </div>
                <div className="flex justify-center">
                    <div className="space-y-6">
                        <span onClick={() => changeBackgroundImage(firstImg)} className="hover:bg-gray-600 cursor-pointer h-4 w-4 m-auto bg-black rounded-full inline-block"></span>
                        <span onClick={() => changeBackgroundImage("https://i.pinimg.com/564x/e2/99/fc/e299fc75f46f3a8a3a863b480ebda12a.jpg")} className="hover:bg-gray-600 cursor-pointer h-4 w-4 m-auto bg-black rounded-full inline-block"></span>
                        <span onClick={() => changeBackgroundImage("https://www.mymove.com/wp-content/uploads/2018/08/Wall-mounted-tv_@srijaroen_Getty-Images.jpg")} className="hover:bg-gray-600 cursor-pointer h-4 w-4 m-auto bg-black rounded-full inline-block"></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider
