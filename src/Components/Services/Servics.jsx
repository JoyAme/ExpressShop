import React from 'react'
import { Container, Row } from '../../Styles/GlobalComp'
import { Icons } from '../../asset/Data'
import { Contain, ServiceWrapper } from './ServiceStyle'


const Servics = () => {
  return (
    <div>
    <ServiceWrapper>
      <Container>
        <Contain>
        <Row>
            <div>

            <div className='CHOICE'>
                <h3>Better Choice,<br></br>
                 better Prices</h3></div>
            <div>

            </div>
            </div>
            <div className='icon'>
            {
                Icons.map((icon,id)=>{
                    const {ICONS,TASK,INFO}=icon;
                    return <div className='iconn' key={id}>
                        <div>
                        <h3>{ICONS}</h3>
                        <h6>{TASK}</h6>
                        <h5 >{INFO}</h5>
                        </div>
                    </div>
                })
            }
            </div>
            </Row>
            </Contain>
            </Container>
    </ServiceWrapper>
    </div>
  )
}

export default Servics
