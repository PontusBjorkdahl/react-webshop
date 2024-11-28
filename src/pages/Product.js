import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import styled from 'styled-components'
import { motion } from "framer-motion"

function Product({ addQty, addToCart, resetQty }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://codexplained.se/electronics.php?id=${params.id}`);
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
          console.log(error);
      }
    }
    fetchData();
  }, [])

  const params = useParams();
  console.log(params);

  return (
    <Wrapper>
      <article>
          <h2>{product.title}</h2>
          <img src={product.url} width="400px"/>
          <p>{product.price + 'kr'}</p>
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
          <p>Stock: {product.storage}</p>
          <p>{product.description}</p>
        </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  input,
  button {
    font-size: 16px
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

  input {
    padding: 5px;
    text-align: center;
  }

`

export default Product