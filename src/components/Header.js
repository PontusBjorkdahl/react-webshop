import React from 'react'
import Cart from './Cart'
import Nav from './Nav'
import styled from 'styled-components'

function Header({ cartItems, addToCart, removeFromCart, totalPrice, itemsCounter } ) {
  return (
    <Wrapper>
        <div className='nav'>
        <Nav />
        </div>
        <div className='cart'>
        <Cart 
        cartItems={cartItems} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart} 
        totalPrice={totalPrice}
        itemsCounter={itemsCounter} />
        </div>
    </Wrapper>
  )
}

// CSS
const Wrapper = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  .nav {
    grid-column: 1 / 2;
  }

  .cart {
    grid-column: 3 / 4;
  }
`
export default Header

