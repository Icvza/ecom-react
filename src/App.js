import React, { useState, useEffect, } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './screens/Home'
import Contact from './screens/Contact'
import Shop from './screens/Shop'
import Footer from './components/Footer';
import LoadingScreen from './screens/LoadingScreen'
import Cart from './screens/Cart';

export const ShoppingCartContext = React.createContext()

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

function App() {

  const [data, setData] = useState(null)
  const [cart, setCart] = useState(cartFromLocalStorage)

  useEffect(()=> {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://mountingly.herokuapp.com/')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [])

  function addToCart(item) {
    setCart([...cart, item])
  }

  function deleteItem(id) {
    let x = [...cart]
    x.splice(cart.indexOf(cart.filter((cartItem) => cartItem['id'] === id)[0]), 1)
    setCart(x)
  }


  return (
    <div className='app'>
      {data ? (
        <ShoppingCartContext.Provider value={{ cart, addToCart, deleteItem }}>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop data={data} addToCart={addToCart} />} />
              <Route path='/cart' element={<Cart cart={cart} deleatItem={deleteItem} />} />
            </Routes>
            <Footer />
          </Router>
        </ShoppingCartContext.Provider>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default App;



