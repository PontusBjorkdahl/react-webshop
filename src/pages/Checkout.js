import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Checkout( { cartItems, addToCart, removeFromCart, totalPrice, emptyCart } ) {
  return (
    <Wrapper>
      <h2>Checkout</h2>
      <h3>Products</h3>
      <hr></hr>
      {cartItems.length === 0 ? 
      <div id='emptyCart'>
        <p id='cartIsEmpty'>Cart is empty!</p>
        <Link to="/">Back to shopping</Link>
        </div> 
      : ''}
      <table>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td><img src={item.url} width="150px"/></td>
                <td>{item.title}</td>
                <td>{item.qty}x {item.price}kr</td>
                <td>
                  <button onClick={() => removeFromCart(item)}>-</button>
                  <button onClick={() => addToCart(item)}>+</button>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
      <p>
        Total: {totalPrice}kr
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 20px 50px;

  
  h3 {
    text-align: left;
    margin-left: 75px
  }

  #cartIsEmpty {
    margin: 10px;
    font-size: 22px;
    font-weight: bold;
  }

  p {
    font-size: 22px
  }

  td {
    padding: 40px;
  }

  button {
    margin-left: 10px;
    font-size: large;
    width: 28px;
    height: 28px;
    background-color: black;
    color: white;
    border: 2px solid black;
  }

  button:hover {
    opacity: 0.8;
  }
`

export default Checkout