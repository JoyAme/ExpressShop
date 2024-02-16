import React from 'react'
import { FooterWrap, RowWrap } from './FooterStyle';
import { Container } from '../../Styles/GlobalComp';
import { FooterLink } from './FooterLink';
// import { Link } from 'react-router-dom';

const Foot = () => {
  return (
    <div>
      <FooterWrap>
        <Container>
            <div className='wrapper'>
            <RowWrap>
            {
                FooterLink.map((value,index)=>{
                    const {Question, Assistance, Community, Info, Test}=value;
                    return(
                        <ul key={index}>
                         <li>{Question}</li>
                         <li>{Assistance}</li>
                         <li>{Community}</li>
                         <li>{Info}</li>
                         <li>{Test}</li>
                        </ul>
                    )
                })
            }
                       </RowWrap>

            <div className='wrap'>
            <select>
            <option value="English">English</option>
            </select>
            <h4>Netflix Nigeria</h4>
            </div>

            </div>
        </Container>
      </FooterWrap>
    </div>
  )
}

export default Foot
