import React from 'react'
import { Container } from '../Styles/GlobalComp'
import { Sessions } from './Sessionstyle'
import logo from '../asset/imgy/facebrush.jpg';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import flyer from '../asset/imgy/flyer.jpg'
import Button from '../asset/Button';

const Sessio = () => {
  return (
    <div>
        <Sessions>
    <Container>
    <div className='container'>

        <div className='Row'>
            <div className='card000'>
                <Button>Sign in</Button>
                <Button>Sign up</Button>
            </div>
            <div className='card001'>
                <div className='card1'>
                <h4>Welcome deal</h4>
                <h6>your exclusive</h6>
                <div className='img-card'>
                    <img src={logo} alt='logo'/>
                    <div className='arrow arroww'>
                    <div><IoIosArrowBack className='arrows' /></div>
                    <div><IoIosArrowForward className='arrows' /></div>
                    
                    </div>
                    <h5>$894:0</h5>
                </div>
                </div>
            </div>
        </div>

        <div className='Row'>
            <div className='card002'>
                <div className='card11'>
                <h4>Best Sellers</h4>
                <h5>Get discount on popular items</h5>
                <div className='img-card'>
                <img src={flyer} alt='logo' className='flyer'/>
                </div>
                </div>
            </div>
       </div>

       <div className='Row'>
            <div className='card000'>
                <Button>Sign in</Button>
                <Button>Sign up</Button>
            </div>
            <div className='card001'>
                <div className='card1'>
                <h4>Welcome deal</h4>
                <h6>your exclusive</h6>
                <div className='img-card'>
                    <img src={logo} alt='logo'/>
                    <div className='arrow arroww'>
                    <div><IoIosArrowBack className='arrows' /></div>
                    <div><IoIosArrowForward className='arrows' /></div>
                    
                    </div>
                    <h5>$894:0</h5>
                </div>
                </div>
            </div>
        </div>

            {/* <div className='Row1'>
                <div className='card003'>
                    <div className='Card-sub'>
                    <h2>Choice <br></br>Free Shipping</h2>
                    </div>
                </div>
                <div className='card003'>
                        <div className='Card-sub'>
                        <h2>Weekly Deals</h2>
                        <h6>Low price in the past 30days</h6>
                        </div>
                </div>
            </div> */}
    </div>
      </Container>
      </Sessions>
    </div>
  )
}

export default Sessio
