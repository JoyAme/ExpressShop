// import { useState } from 'react';
import { useState } from 'react';
import { Container } from '../../../Styles/GlobalComp'
import { Data } from '../../../asset/Data';
// import logo from '../../../asset/image/facebrush.jpg';
import { Shopp } from './Shopstyle'
import {MdAddShoppingCart } from "react-icons/md";
// import Modals from '../../../asset/Modal/Modals';
import { Link } from 'react-router-dom';
// import Hover from '../../../Styles/Hover';

// import './Hovercs.css';




const Shop = () => {
  // const [isHovered, setIsHovered] = useState(false);
  // const [popUp,setPopUp] =useState(false)

  // const [openModal, setOpenModal]=useState(false)

 
  

  // const OpenUp=()=>{
  //   setOpenModal(true)
  //   console.log("open")
  // }
  return (
<div>
{/* <Hover/> */}
        <Shopp>
        <Container>

        <div className='CONT'>
            {
              Data.map((data,index)=>{
                const {img,name,Amount,Shipping,Delivery}=data;
                return<div className='container ' key={index} >
        <div className='wrapper'>
                <img src={img} alt='watch'/>
           <span>
           <MdAddShoppingCart className='Cart'/>
           </span>
           <div>
           <h4 className='name'>{name}</h4>
           {/* <h4>{Logo}</h4> */}
           </div>
           <div className='shipper'>
           <h4>${Amount}</h4>
           <h5 className='ship'>Welcome Deal</h5>
           {/* <h4 >{Shipping}</h4> */}
           </div>
           {/* {isHovered && ( */}
          <Link to={`/modal/${data.id}`}><button className='btn '>see preview</button></Link>
           {/* )} */}



                  {/* <Modals open={openModal} onClose={()=> setOpenModal(false)}/> */}
                </div>
                </div>
// onClick={()=> setOpenModal(true)}

                // </div>
                // </>


              })  
            }
</div>
    

      </Container>
      </Shopp>
</div>
  )
}

export default Shop
