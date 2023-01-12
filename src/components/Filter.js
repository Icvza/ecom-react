import React from 'react'

export default function Filter({setResults, data, search, searchPrice, setSearch, setSearchPrice}) {


    function handleChange(event) {
        if (event.target.id === 'word') {
            let res = data.filter(service => service['name'].includes(event.target.value));
            setResults(res);
            setSearch(event.target.value);
        } else if (event.target.id === 'price') {
            let res = data.filter(service => parseInt(service['price']) - 25 == parseInt(event.target.value) - 25);
            setResults(res);
            setSearchPrice(event.target.value);
        }
    }


    return (
        <div>
            <input
                id="word"
                onChange={handleChange}
                className="p-8 focus:underline mt-2 md:mr-2 border-gray-300 rounded-md placeholder placeholder:font-light "
                placeholder="Search for a service" value={search} type="text"
            />
            <input
                onChange={handleChange}
                id="price"
                className="p-8 focus:underline mt-2 md:mr-2 border-gray-300 rounded-md placeholder placeholder:font-light "
                placeholder="Price" value={searchPrice} type="text"
            />
        </div>
    )
}
