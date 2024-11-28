import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './pages/Products';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [qtyInput, setQtyInput] = useState(1);

  const addQty = (e) => {
    setQtyInput(e);
  }

  const resetQty = (product) => {
    document.getElementById(`input${product.id}`).value = '1';
  }

  const addToCart = (product) => {
    // Checks if the product/item already exist in the shopping cart
    const item = cartItems.find(x => x.id === product.id)

    // Adds qty to products if above statement is true
    // + to convert variables to numbers
    if (item) {
      setCartItems(cartItems.map((x) => 
        x.id === product.id ? {...item, qty: +item.qty + +qtyInput} : x))
    // If product does not already exist in shopping cart, add product with qty: 1
    } else {
      setCartItems([...cartItems, {...product, qty: qtyInput}]);
    }
    setQtyInput(1);
  }

  const removeFromCart = (product) => {
    const item = cartItems.find((x) => x.id === product.id)
    // Removes item if item.qty === 1  
    if (item.qty === 1) {
      setCartItems(cartItems.filter((x) => 
        x.id !== product.id));
    } 
    // Removes item.qty by 1
    else {
      setCartItems(cartItems.map((x) => 
      x.id === product.id ? {...item, qty: item.qty - 1} : x)
      );
    }
  }

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let counter = 0;
    cartItems.map((x) => {
      counter += x.qty * x.price;
      console.log(counter)
      console.log(cartItems)
    })
    setTotalPrice(counter);
  }, [cartItems]);

  const [itemsCounter, setItemCounter] = useState(0)

  useEffect(() => {
    let counter = 0;
    cartItems.map((x) => {
      counter += +x.qty;
    })
    setItemCounter(counter)
  }, [cartItems]);



  return (
    <Wrapper className="App">
      <BrowserRouter>
        <Header 
        cartItems={cartItems} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart} 
        totalPrice={totalPrice}
        itemsCounter={itemsCounter} />
        <Routes>
          <Route path="/" element={
            <Products 
            addToCart={addToCart} 
            addQty={addQty} 
            resetQty={resetQty}/>} />
          <Route path="/:id" element={
            <Product 
            addToCart={addToCart} 
            addQty={addQty} 
            resetQty={resetQty} />} />
          <Route path="/checkout" element={
            <Checkout 
            addToCart={addToCart} 
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            totalPrice={totalPrice} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`

export default App;
