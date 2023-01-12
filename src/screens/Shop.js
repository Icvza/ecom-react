import React, { useState } from 'react'
import Product from '../components/Product'
import Filter from '../components/Filter'

function Shop(props) {

    const [search, setSearch] = useState('')
    const [searchPrice, setSearchPrice] = useState('')
    const [results, setResults] = useState([])


    return (
        <div id="shop-container" className="flex flex-wrap flex-col items-center justify-center min-h-screen bg-slate-100 md:flex-row ">
            <Filter setResults={setResults} data={props.data} search={search} searchPrice={searchPrice} setSearch={setSearch} setSearchPrice={setSearchPrice}/>

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



