import React from 'react'
import { Link } from 'react-router-dom'
import { LuUser2 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { PiBarcodeBold } from "react-icons/pi";
import { FiShoppingCart } from "react-icons/fi";
import { NavWrap, NavWrapper, RightBar } from './Navbarstyle'

const NavbarMenu = (props) => {
  return (
    <div>
      <NavWrap>
        <NavWrapper>
          <div>
        <Link to='/' ><h1 className='express'>Express</h1></Link>
        </div>
        
        <div className='Form'>
          <form action=''>
            <input typeof='text' placeholder='i phone 11 pro' name='info' className='input'/>
           
          </form>
          <button className='searchy'> 
            <CiSearch  />
            </button>
        </div>




        <RightBar>
            <div className='Express-app'>
            <PiBarcodeBold className='Bar-code'/>
            <div className='Express-display'>
              {/* <h6 className='app'>0</h6> */}
              <h6 className='download'>Download the<br></br> Express app</h6>
            </div>
            </div>

            <div className='User'>
            <LuUser2 className='user'/>
            <div>
            <h6>Welcome<br></br>Signin/register<IoIosArrowDown /></h6>
            </div>

            </div>

            <Link to='/cart'> <div className='Cart'>
             <FiShoppingCart className='shoppingcart' />
            <div className='Cart-display'>
             
             <span className='Cart-number'>{props.count}</span><br></br>cart
            </div>
          
      </div>  </Link>
      </RightBar>
    

      </NavWrapper>
      </NavWrap>
    </div>
  )
}

export default NavbarMenu
