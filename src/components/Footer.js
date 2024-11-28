import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

const ImgMotion = {
  whileHover:{ scale: 1.1 },
  whileTap:{ scale: 0.9 }
}

function Footer() {
  return (
    <Wrapper
    as={motion.div}
    variants={ImgMotion}
    >
      <p>Vill du veta mer om oss?</p>
      <motion.img 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }} 
      src={require('../img/facebook.png')} height="80px" />
      <motion.img 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }} 
      src={require('../img/insta.png')} height="80px" />
      <motion.img 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }} 
      src={require('../img/twitter.png')} height="80px" />
    </Wrapper>
  )
}

// CSS
const Wrapper = styled.div`
  border-top: 1px solid black;
  margin-top: 50px;
  img {
    margin: 30px;
  }
`

export default Footer