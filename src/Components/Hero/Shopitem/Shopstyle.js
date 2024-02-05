import {styled} from 'styled-components'

export const Shopp=styled.div`
   width:100%;
   margin-top:40px;
   .container{
    width:16rem;
    /* background:green; */
    border-radius:18px;
    /* padding:10px 10px; */
   }
   .container:hover{
    background:white;
    border:1px solid grey;
   }
   .Cart{
    font-size:25px;
    padding:10px 10px;
    border-radius:999px;
    background:whitesmoke;
   
   }
   span{
    display:flex;
    right:0;
    position:absolute;
    bottom:12rem;
    padding-right:18px;
   }
   .wrapper{
    width:230px;
    position: relative;
    /* background:red; */
    padding:10px 10px;
    margin:auto;
   }
   .CONT{
    display:grid;
    grid-template-columns: repeat(5,250px);
    row-gap:40px;
   }
   img{
    width: 100%;
    border-radius:18px;
   }
   .btn{
    margin-top:20px;
    background:black;
    color:white;
    padding:8px 18px;
    border-radius:20px;
    border:none;
    width:230px;
    cursor:pointer;
    /* display:none; */
    text-align:center;
   }
   /* .btn:hover{
    display:block;
   } */
   .ship{
    background:red;
    width:96px;
    color:white;
    font-size:10px;
    text-align:center;
    padding:4px 0px;
    border-radius:5px;
    border:none;
   }
   .shipper{
    margin-top:25px;
   }

   @media screen and (max-width:768px){
    .CONT{
        grid-template-columns: repeat(3,200px);
    }
    .container{
    width:13rem;
    /* background:green; */
    border-radius:18px;
    /* padding:10px 10px; */
   }
   .wrapper{
    width:150px;
    /* position: relative;
   
    padding:10px 10px;
    margin:auto; */
   }
   .btn{
   
    width:150px;
    
   }


   }

   @media screen and (max-width:478px){
    .CONT{
        grid-template-columns: repeat(2,200px);
        /* row-gap:20px; */
    }
    .container{
    width:11rem;
    /* background:green; */
    border-radius:18px;
    border:1px solid black;
    /* padding:10px 10px; */
   }
   .Cart{
    font-size:16px;
    padding:5px 5px;
    border-radius:999px;
    background:whitesmoke;
   
   }
   span{
    display:flex;
    right:0;
    position:absolute;
    bottom:8rem;
    padding-right:18px;
   }
   .wrapper{
    /* width:120px; */
    /* position: relative;
   
    padding:10px 10px;
    margin:auto; */
   }
   .btn{
    padding:8px 18px;
    /* width:100px; */
    font-size:10px;
    
   }
    }
`