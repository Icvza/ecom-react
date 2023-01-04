import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './screens/Home'
import Contact from './screens/Contact'
import Shop from './screens/Shop'
import Footer from './components/Footer';
import LoadingScreen from './screens/LoadingScreen';

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://mountingly.herokuapp.com/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);


  return (
    <div className='app'>
      {data ? (
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop data={data}/>} />
          </Routes>
          <Footer />
        </Router>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default App;



