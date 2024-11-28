import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from "framer-motion"

function Cart({ cartItems, addToCart, removeFromCart, totalPrice, itemsCounter }) {
  console.log(cartItems)

  return (
    <Wrapper>
      <motion.div 
      id='cartSymbol'
      whileHover={{ scale: 1.1 }}
      >
        <img src={require('../img/shoppingCart.png')} alt="shopping cart" /> 
        <h2>{itemsCounter}</h2>
      </motion.div>
      
      <CartView>
        {cartItems.length === 0 ? <div>Cart is empty</div> : ''}
        {cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.url} height='100px'/>
            <h4>{item.title}</h4>
            <div>
              <button onClick={() => removeFromCart(item)}>-</button>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
            <div>
              {item.qty}x {item.price}kr
            </div>
            <hr></hr>
            <br></br>
          </div>
        ))}
        <div id='total'>
          Total: {totalPrice}kr
        </div>
        
        <CheckoutLink to='/checkout'>Checkout</CheckoutLink>
      </CartView>
    </Wrapper>
  )
}

// CSS
const CartView = styled.div`
  display: none;
  border: 2px solid black;
  position: absolute;
  top: 55px;
  right: 0;
  background-color: white;
  padding: 20px;

  button {
    margin: 5px;
    width: 25px;
    height: 25px
  }

  #total {
    margin-bottom: 10px;
  }

  h4 {
    margin: 10px 0;
  }
`

const Wrapper = styled.div`
  position: relative;

  h2 {
    margin: 0;
  }

  #cartSymbol {
    display: flex;
    justify-content: flex-end;
  }
  
  &:hover {
    ${CartView} {
      display: block;
    }
`

const CheckoutLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: large;
  border-bottom: 1px solid black;
`

export default Cart