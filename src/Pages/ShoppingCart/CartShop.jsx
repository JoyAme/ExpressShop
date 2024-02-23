import { useEffect, useState } from "react"
// import Shop from "../../Components/Hero/Shopitem/Shop"
import { CartShoop } from "./Cartstyle"
import { Container } from "../../Styles/GlobalComp"
// import Button from "../../asset/Button"
import { Link } from "react-router-dom"



const CartShop = ({cart}) => {

  const [CART,setCART]=useState([])

  useEffect(()=>{
    setCART(cart)
   
    console.log('CART')
  },[cart])

  
  
  return (
    <div>
      <CartShoop>
        <Container>
          <Link to='/'><h4>Back to Home</h4></Link>
      
      
      {
        CART?.map((cartt,index)=>{
          const{img,name,Amount,quantity}=cartt

         

          return (
            <div key={index} className="cart-shop">
            <img src={img} alt={name}/>

            <div className="right-bar">
            <h1>{name}</h1>
            <h4>${Amount}</h4>
            <div className='bbtn'>
            <button className='Btn' 
            onClick={()=>{
              const _CART= CART.map((item, cartIndex)=>{
                return index === cartIndex ? {...item , quantity: quantity + 1 }: item
              } )
              setCART(_CART)
            }}
            >+</button>
            <h4>{cartt.quantity}</h4>
            <button className='Btn'>-</button>
           </div>
           </div>
            </div>
          )
        })
      }
     
     {/* {cart === 0 ? <h1>empty</h1>: */}
     <h1 className="Total">Total: <span>${
      CART.map(item=> item.Amount * item.quantity).reduce((total,value)=> total + value,0 )
     }</span> </h1>
     </Container>
     </CartShoop>
    </div>
  )
}

export default CartShop

