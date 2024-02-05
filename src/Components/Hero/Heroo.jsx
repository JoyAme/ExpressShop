import React from 'react'
import { HeroWrap } from './Herostyles'
import { IoIosArrowDown } from "react-icons/io";
import logo from './../../'
import { Container, Row } from '../../Styles/GlobalComp'

const Heroo = () => {
  return (
    <div>
     <HeroWrap>
      <Container>
        <Row>
        <div className='Hero-dropdown'>
          <div>
          All Categories
          </div>
          <IoIosArrowDown />
        
          </div>

          <h4 className='Hero-info'>NN</h4>
          <h4 className='Hero-info'>Bestsellers</h4>
          <h4 className='Hero-info'>Topseller</h4>
          <h4 className='Hero-info infoo' >Jewelry & watches</h4>
          <h4 className='Hero-info infoo'>Home & Garden</h4>
          <div className='Hero-info infoo'>More  <IoIosArrowDown /></div>
        </Row>
      </Container>
      </HeroWrap> 
    </div>
  )
}

export default Heroo
