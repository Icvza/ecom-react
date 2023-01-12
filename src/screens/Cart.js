import React from 'react'
import CartItem from '../components/CartItem'
// .reduce

export default function Cart(props) {

    // const total = () => {

    //     let x = 0

    //     props.cart.forEach(element => {
    //         x = x + (parseInt(element['price']) - 25)
    //     });

    //     return x
    // }

    const total = () => {
        return props.cart.reduce((counter, item) => counter + (parseInt(item['price']) - 25), 0);
        // //Arr
    }


    return (
        <div id="shop-container" className="flex flex-wrap flex-col items-center justify-center min-h-screen bg-slate-100 md:flex-row w-full h-full">
            <div className="flex justify-between items-center w-4/6 h-auto flex-row bg-white bg-white rounded-2xl shadow-2xl p-16 space-y-10 rounded-2xl shadow-2xl ">
                <div className='flex flex-col h-full space-y-2 w-full justify-center bg-opacity-0  '>
                    {props.cart.length === 0 ? (
                        <div>Cart is empty</div>
                    ) : (
                        <>
                            {props.cart.map((item) => (
                                <CartItem key={item.id} item={item} className="h-64" />
                            ))}
                        </>
                    )}
                </div>
                <div className='flex justify-end items-end p-4'>
                    <div className=''>
                        Total:${total()}
                    </div>
                </div>
            </div>

        </div>
    )
}



// "flex flex-row md:w-1/2 xl:w-[33.3%] p-6 m-3 space-y-10 bg-red-100 rounded-2xl shadow-2xl md:flex-row md:space-y-10 md:space-x-10 md:p-16 
