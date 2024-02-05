import {styled} from 'styled-components'



export const NavWrap=styled.div`
background:black;
width:100%;
padding:10px 0px;
/* position:fixed;
left:0;
right:0; */
/* margin-top:70px; */
/* top:0; */


a{
    color:white;
    text-decoration:none;
}

.Cart{
 display:flex;
 align-items:center;
}
.shoppingcart{
    font-size:30px;
}
.searchy{
    background:black;
    color:white;
    /* padding:0px 10px; */
    font-size:23px;
    align-items:center;
     border-radius:19px;
        padding-right:15px;
        padding-left:10px;
    cursor: pointer;
    
}
.input{
   width:630px;
   padding:5px;
   margin-right:0px;
   outline:none;
   border:none;
}
::placeholder{
  font-size:16px;
}
.Form{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:700px;
    padding:5px 10px;
    background:white;
    color:black;
    border-radius:25px;
}

.Cart-number{
    background:white;
   padding-left:7px;
   padding-right:7px;
    border-radius:8px;
   color:black;
}

@media screen and (max-width:768px){
    .Form{
    
    width:400px;
    padding:5px 10px;
   
}
.input{
   width:230px;
   /* padding:5px;
   margin-right:0px;
   outline:none;
   border:none; */
}
}

@media screen and (max-width:478px){
    .express{
   display:block;
}
.Form{
    width:300px;
    text-align:center;
}
.input{
   width:180px;
}
}
`

export const NavWrapper=styled.div`
margin:auto;
display:flex;
gap:40px;
justify-content:center;
align-items:center;
width:90%;
color:white;

.Express-app{
    display:flex;
    align-items:center;
}
.download{
    /* width:300px; */
}

.Bar-code{
    font-size:28px;
}


`
export const RightBar=styled.div`
display:flex;
    align-items:center;
    gap:50px;
.user{
    font-size:30px;
}
.User{
    display:flex;
    align-items:center;
}
@media screen and (max-width:768px){
    display:none;
}
`