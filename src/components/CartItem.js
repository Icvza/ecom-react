import React, {useContext, useEffect} from 'react'
import { ShoppingCartContext } from '../App'


function CartItem(props) {

    const { deleteItem } = useContext(ShoppingCartContext);

    const item = props.item

    useEffect(()=>{

    }, [props])

    return (
        <div className=" flex justify-between flex-row w-full h-full md:h-32 rounded-2xl hover:scale-95  duration-200 shadow-2xl bg-gray-50">

            <div className='flex  justify-between'>
                {/* <!-- Image Div --> */}
                <img
                    src={item.img}
                    alt=""
                    className="rounded-tl-2xl rounded-bl-2xl mx-auto duration-200 w-9 md:w-24 hover:scale-105"
                />

                {/* <!-- Content --> */}
                <div className="space-x-4">

                    {/* <!-- Label & Title Container --> */}
                    <div className="space-x-4">

                        {/* <!-- Title --> */}
                        <div className="p-1 font-medium">
                            {item.name}
                        </div>

                        {/* <!-- DES Container --> */}
                        <div className="p-1 font-medium">
                            <p className=""> {item.des}</p>
                        </div>

                        {/* <!-- Delete Button Group --> */}
                        <div className=" w-2/12 text-sm p-1">
                            <button onClick={ () => { deleteItem(item['id'])}} className="w-full text-white  hover:bg-sky-700 bg-sky-500 text-white  rounded-lg ">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Price Container --> */}
            <div className="flex justify-center items-center p-4 ">
                <p className="">${item.price - 25}</p>
            </div>
        </div>
    )
}

export default CartItem
