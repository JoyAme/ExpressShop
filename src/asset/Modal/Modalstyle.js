import {styled} from "styled-components";

export const Modal=styled.div`
display:flex;
color:black;
width:100%;
padding-top:120px;
padding-bottom:120px;
/* .overlay{ */
    /* width:100%;
        height:100%;
      background:rgb(0,0,0,0.5px);
      position:fixed; */
/* } */
hr{
    margin-top:40px;
}
img{
    width:100%;
    border-radius:9px;
}     

.close-btn{
        right:0;
        top:-12px;
        position:absolute;
     .close{
    font-size:30px;   
    color:white;
    border-radius:999px;
    background:black; 
    cursor:pointer;
    }

 }

    .leftbar{
        flex:1;
        width:200px;
      
    }
    .rightbar{
        flex:1;
        width:100%;
        background:white;
        border-radius:9px;
        padding:10px 10px;
        border:1px solid grey;
        .right-under{
            padding-top:20px;
        }
        .bbtn{
            display:flex;
            gap:12px;
            align-items:center;
            margin-top:20px;
            margin-bottom:20px;
            .Btn{
                padding:4px 7px;
                border-radius:999px;
                border:none;
                color:grey;
                /* font-size:16px; */
            }
        }
        .BBtn{
            text-align:center;
            padding:7px 20px;
            width:320px;
            background-color:red;
            color:white;
            cursor:pointer;
            font-size:20px;
            border:none;
            border-radius:19px;
            margin-top:40px;
        }
    }
    .midbar{
        flex:1;
        width:100%;
        padding:10px 20px;
        background:white;
        .shipping-info{
            margin-top:20px;
            padding:20px 20px;
            width:340px;
            color:white;
            border-radius:9px;
            background-image: linear-gradient(to right, red , yellow);
        }
        .description{
            font-size:12px;
            color:black;
            margin-top:20px;
        }
        .star-icon{
            margin-top:40px;
            display:flex;
        }
    }
@media screen and (max-width:768px){
    .leftbar{
       
       
      
    }
    .rightbar{
      
        /* width:100px; */
       
    }
    .midbar{
      
       /* width:300px;  */
       
    }
}
`

export const ContainerWrap=styled.div`
        max-width:1000px;
        width:100%;
        position: fixed;
        top:40%;
        left:50%;
        padding:20px 20px;
        transform:translate(-50%,-50%);
        height:500px;
        background:black;
        border-radius:20px;
        margin:auto;
        /* .container{
            width:80%;
            margin:auto;
            

            padding:30px 0px;
        } */

 @media screen and (max-width:768px){
    flex-direction:row;
    top:0;
    left:0;
    transform:none;
    /* width:100%; */
    height:100%;
    
}     
`
export const Row=styled.div`
       
        display:flex;
        justify-content:center;
        gap:30px;
 @media screen and (max-width:768px){
   flex-direction:column;
}  
`