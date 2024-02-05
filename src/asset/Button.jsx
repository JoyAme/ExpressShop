import React from 'react'
import { ButtonStyle } from '../Styles/GlobalComp'


const Button = ({children,type,variant}) => {
  return (
    <div>
      <ButtonStyle type={type} variant={variant}>{children}</ButtonStyle>   
      
     </div>
  )
}

export default Button
