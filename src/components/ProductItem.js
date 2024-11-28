import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from "framer-motion"

const ProductsMotion = {
  start: {opacity: 0},
  stop: {
    opacity: 1,
    transition: {
      duration: 1.5
    },
  }
}

function ProductItem({ product, addToCart, addQty, resetQty }) {
  return (
    <div>    
        <Wrapper 
        as={motion.div}
        initial="start"
        animate="stop"
        variants={ProductsMotion}
        whileHover={{ scale: 1.1 }}
        >
          <LinkStyle 
          to={`/${product.id}`}>
          <img src={product.url} alt={product.title} height="250px"/>
          <h3>{product.title + ' ' + product.price}kr</h3>
          </LinkStyle>
            <input
              id={'input' + product.id} 
              type="number" 
              min="1" 
              max={product.storage}
              defaultValue="1"
              onChange={(e) => addQty(e.target.value)}
              />
            <button onClick={() => {
              addToCart(product); resetQty(product)}}>Add To Cart</button>
        </Wrapper>
        <br></br>
    </div>
  )
}

// CSS

const Wrapper = styled.article`
  border: 2px solid #e4e4e4;
  margin: 20px;
  padding: 20px;

  input,
  button {
    font-size: 16px
  }

  input {
    padding: 5px;
    text-align: center;
  }

  button {
    background-color: black;
    color: white;
    border: 2px solid black;
    padding: 5px
  }

  button:hover {
    opacity: 0.8;
  }
`

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`

export default ProductItem