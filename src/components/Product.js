import React, {useContext} from 'react'
import {ShoppingCartContext} from '../App' 

function Product(props) {

    const { addToCart } = useContext(ShoppingCartContext);
    return (



        <div className="flex flex-col md:w-1/2 xl:w-1/3 p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-10 md:space-x-10 md:p-16 ">
            {/* <!-- Image Div --> */}
            <div>
                <img
                    src={props.item.img}
                    alt=""
                    className="rounded-lg mx-auto duration-200 w-60 hover:scale-105"
                />
            </div>
            {/* <!-- Content --> */}
            <div className="flex flex-col space-y-6">
                {/* <!-- Label & Title Container --> */}
                <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                    <div>
                        <div
                            className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full"
                        >
                            Save $25
                        </div>
                    </div>
                    {/* <!-- Title --> */}
                    <div className="max-w-sm text-2xl font-medium">
                        {props.item.name}
                    </div>
                    {/* <!-- Price Container --> */}
                    <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                        <p className="line-through">${props.item.price}</p>
                        <p className="text-5xl font-bold">${props.item.price - 25}</p>
                        <p className="text-sm font-light h text-back"> {props.item.des}</p>
                    </div>
                    {/* <!-- Button Group --> */}
                    <div className="group">
                        <button className="w-full transition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
                            <div onClick={ () => addToCart(props.item)}className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                                Add to cart
                            </div>
                        </button>
                    </div>
                    {/* <!--Available --> */}
                    <div className="flex items-center space-x-3 group">
                        <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping">
                        </div>
                        <div className="text-sm">Available this week</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product
