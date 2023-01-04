import React from 'react'

export default function Product(props) {
    return (

        <div class="flex flex-col items-center justify-center min-h-screen bg-slate-100">
            
            <div
                class="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16"
            >
                
                <div>
                    <img
                        src={props.item.img}
                        alt=""
                        class="mx-auto duration-200 w-60 hover:scale-105"
                    />
                </div>

                
                <div class="flex flex-col space-y-6">
                    <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">
                        <div>
                            <div
                                class="inline-block px-3 py-1 text-sm text-white bg-black rounded-full"
                            >
                                $25 Off
                            </div>
                        </div>

                        
                        <div class="max-w-sm text-2xl font-medium">
                            {props.item.name}
                        </div>
                        
                        <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">
                            <p class="line-through">${props.item.price - 25}</p>
                            <p class="text-5xl font-bold">${props.item.price}</p>
                            <p class="text-sm font-light text-black">
                                {props.item.des}
                            </p>
                        </div>

                        
                        <div class="group">
                            <button
                                class="w-full transition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg"
                            >
                                <div
                                    class="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700"
                                >
                                    Add to cart
                                </div>
                            </button>
                        </div>


                        <div class="flex items-center space-x-3 group">
                            <div
                                class="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"
                            ></div>
                            <div class="text-sm">Available this week</div>
                        </div>

                        
                        <div
                            class="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row"
                        >
                            <button
                                class="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
                            >
                                <img src="images/weight.png" alt="" class="w-8" />
                                <span>Add to cart</span>
                            </button>

                            <button
                                class="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
                            >
                                <img src="images/heart.png" alt="" class="w-8" />
                                <span>Add to wishlist</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
