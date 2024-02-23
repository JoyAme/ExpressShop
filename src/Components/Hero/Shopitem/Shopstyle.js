import {styled} from 'styled-components'

export const Shopp=styled.div`
   width:100%;
   padding-bottom:60px;
   margin-top:40px;
   .container{
    flex:0.1;
    /* background:green; */
    border-radius:18px;
    /* padding:10px 10px; */
   }
   .trigger-area:hover + .hover-button {
    display: block;
  }
  .hover-button {
    display: none;
  }
   .container:hover{
    background:white;
    box-shadow:0 0 5px 3px grey;
    /* border:1px solid grey; */
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
    /* width:100%; */
    padding:10px 10px;
    position: relative;
    /* background:red; */
    /* padding:10px 10px; */
    margin:auto;
   }
   .CONT{
    display:grid;
    grid-template-columns: repeat(5,260px);
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
    /* width:13rem; */
    /* background:green; */
    /* border-radius:18px; */
    /* padding:10px 10px; */
   }
   .wrapper{
    /* width:150px; */
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
        grid-template-columns: repeat(2,160px);
        gap:20px;
        /* row-gap:20px; */
    }
   
    .container{
    /* width:10rem; */
    /* background:green; */
    /* border-radius:18px;
    border:1px solid black; */
    /* padding:10px 10px; */
   }
   .name{
    font-size:12px;
    margin-top:20px;
   }
   .ship{
  
    width:80px;
    
    font-size:8px;
    
   }
   .shippers h4{
    font-size:12px;
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
    bottom:11rem;
    padding-right:18px;
   }
   .wrapper{
    width:140px;
    /* position: relative;
   
    padding:10px 10px;
    margin:auto; */
   }
   .btn{
    padding:8px 12px;
    width:140px;
    font-size:10px;
    
   }
    }
`