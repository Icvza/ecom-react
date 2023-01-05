import React, { useState } from 'react'
import Product from '../components/Product'

function Shop(props) {

    const [search, setSearch] = useState('')
    const [searchPrice, setSearchPrice] = useState('')
    const [results, setResults] = useState([])


    function handleChange(event) {
        if (event.target.id === 'word') {
            let data = props.data.filter(service => service['name'].includes(event.target.value));
            setResults(data);
            setSearch(event.target.value);
        } else if (event.target.id === 'price') {
            let data = props.data.filter(service => service['price'] == event.target.value);
            console.log(data);
            setResults(data);
            setSearchPrice(event.target.value);
        }
    }


    return (
        <div id="shop-container" className="flex flex-wrap flex-col items-center justify-center min-h-screen bg-slate-100 md:flex-row ">
            <input
                id="word"
                onChange={handleChange}
                className="w-1/4 p-8 focus:underline mt-2 md:mr-2 border-gray-300 rounded-md placeholder placeholder:font-light "
                placeholder="Search for a service" value={search} type="text"
            />
            <input
                onChange={handleChange}
                id="price"
                className="w-1/4 p-8 focus:underline mt-2 md:mr-2 border-gray-300 rounded-md placeholder placeholder:font-light "
                placeholder="Price" value={searchPrice} type="text"
            />

            {((search !== '') || (searchPrice !== '')) ? (
                <div id="shop-container" className="flex flex-wrap flex-col items-center justify-center min-h-screen bg-slate-100 md:flex-row w-full h-full">
                    {results.map((item) => (
                        <Product key={item.id} item={item} />
                    ))}
                </div>
            ) : (
                <div id="shop-container" className="flex flex-wrap flex-col items-center justify-center min-h-screen bg-slate-100 md:flex-row ">
                    {props.data.map((item) => (
                        <Product key={item.id} item={item} />
                    ))}</div>
            )}
        </div>
    )
}

export default Shop



