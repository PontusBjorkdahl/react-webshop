import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import styled from 'styled-components';
import { motion } from "framer-motion"

function Products({ addToCart, addQty, resetQty }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://codexplained.se/electronics.php');
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
          console.log(error);
      }
    }
    fetchData();
  }, [])
  
  return (
    <div>
        <h1>Products</h1>
        <Wrapper>
          {products.map(product => (
            <ProductItem 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
            addQty={addQty} 
            resetQty={resetQty} />
          ))}
        </Wrapper>
    </div>
  )
}

// CSS

const Wrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px auto;
`

export default Products