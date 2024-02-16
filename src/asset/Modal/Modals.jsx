
// import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import {  Modal, Row } from './Modalstyle'
import { Container } from '../../Styles/GlobalComp';
import { Link, useParams } from 'react-router-dom';
import { Data } from '../Data';




const Modals = ({addCart}) => {
    
    let {id}=useParams();
   



// useEffect((Data)=>{

    const  Info = Data.find((p)=> p.id == id)
    console.log(Info)
//  return Info
// },[Info])
   
    //     console.log(data)
    // if(!open) return null;
    // {open,onClose}
   
    // console.log(cart)
  
   
      
  return (
    <>
    <div>
    
        <Modal>
           <Container>
            <Row>
        <div className='leftbar'>
        <img src={Info.img}   alt={Info.name} />
        </div>

        <div  className='midbar'>
            <h4>Welcome deal</h4>
            <h5>{Info.name}</h5>
            <h1>${Info.Amount}</h1>

            <div className='shipping-info'>
            <h4>Shipping:<span>{Info.Shipping}</span></h4>
            <h5>fast delivery <span>{Info.Delivery}</span></h5>
            </div>

            <h5 className='description'>{Info.Description}</h5>
            <div className="star-icon">
            <FaStar className="star-iconn"/>
            <FaStar className="star-iconn"/>
            <FaStar className="star-iconn"/>
            <FaStar className="star-iconn"/>
            <FaStar className="star-iconn"/>

            <h4>{Info.Reviewpoint}</h4>
            </div>
        </div>

        <div className='rightbar'>
            <h4>Shipping:<span>{Info.Shipping}</span></h4>
            <h5>Delivery By <span>{Info.Delivery}</span></h5>
            <hr></hr>
            <div className='right-under'>
           <h4>Quantity</h4>
           <div className='bbtn'>
            <button className='Btn'>+</button>
            <h4>0</h4>   
            <button className='Btn'>-</button>
            </div>
            <p>1 piece at most per customer</p>
            <Link to='/cart'> <button className='BBtn'onClick={()=> addCart(Info)} >Add to cart</button></Link>
            </div>
        </div>
         
          </Row>
          </Container>
          </Modal> 
        </div> 
       
   
       
       
        
         

</>
  )
}

export default Modals
