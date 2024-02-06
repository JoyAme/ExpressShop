import {styled} from 'styled-components'

export const CartShoop=styled.div`
width:100%;
margin-top:40px;
padding-bottom:20px;
/* text-align:center; */
.cart-shop{
    display:flex;
 justify-content:space-around;
 align-items:center;
 margin-top:30px;
    margin-bottom:20px;
}
.Total{
    text-align:center;
    /* background:red; */
    /* width:200px; */
    color:red;
    /* padding:10px 0px; */
    span{
        color:black;
    }
}
.right-bar{
text-align:left;
}
img{
   border-radius:10px;
   width:240px;
}
.bbtn{
    display:flex;
    align-items:center;
    gap:10px;
    margin-top:10px;
    .Btn{
        background:red;
        padding:15px 60px;
        border:none;
        font-size:26px;
        cursor: pointer;
        color:white;
        border-radius:19px;
        &:hover{
            background:black;
        }
    }
    
}
@media screen and (max-width: 478px){
    .right-bar h1{
        font-size:16px;
    }
    img{
   width:150px;
}
.bbtn{
    .Btn{
        
        padding:0px 30px;
       
    }
}

}
`