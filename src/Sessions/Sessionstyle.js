import {styled} from 'styled-components'

export const Sessions=styled.div`
   width:100%;
   margin-top:40px;
   .container{
    display:flex;
    /* align-items:center; */
    justify-content:center;
    gap:10px;
    height:100%;
   }
   .Row{
    height:100%;
   }
   .card000{
    background: rgb(243, 230, 206) ;
       flex:1;
       display:flex;
       justify-content:center;
       align-items:center;
       gap:20px;
       margin-left:20px;
       margin-bottom:20px;
       /* position: relative; */
       height:100px;
      width:280px;
      color:#FC6E6E ;
       border-radius:7px;
   }
   .card001{
       background: rgb(243, 230, 206) ;
       flex:1;
       margin-left:20px;
       margin-bottom:20px;
       /* position: relative; */
       height:390px;
      /* width:280px; */
      color:#FC6E6E ;
       border-radius:7px;
   }
   .card1{
     width:210px;
     align-items:center;
     padding-top:40px;
     padding-bottom:40px;
     /* padding:20px 0px; */
     margin:auto;
   }
  
   .card1 h4{
    font-size:28px;
   }
   .flyer{
    width:100%;
   }
   img{
    margin-top:40px;
    width:100%;
    border-radius:14px;
   }
   .img-card{
    position: relative;
   }
   .arrow{
    position:absolute;
    bottom:8rem;
    
   }
   .arrows{
    background:black ;
    font-size:24px;
    padding:10px 5px;
    border-radius:9px;
   }
   .arroww{
   
    display:flex;
    gap:140px;
    justify-content:space-around;
   }
   .img-card h4{
    margin-top:10px;
    padding-bottom:30px;
   }
   .card002{
    background:whitesmoke ;
       flex:1;
       /* position: relative; */
       height:510px;
      /* width:400px; */
      
       border-radius:30px;
       h4{
        font-size:24px;
        color:#FC6E6E ;
       }
       h5{
        font-size:16px;
        color:grey ;
       }
   }
   .card11{
    width:310px;
     align-items:center;
 padding-left:20px;
 padding-right:20px;
     padding-top:8px;
     padding-bottom:40px;
     /* padding:20px 0px; */
     margin:auto;
   }
   .Row1{
    display:flex;
    flex-direction:column;
    gap:10px;
   }
   .card003{
    background:whitesmoke ;
    /* margin-bottom:70px; */
       flex:1;
       /* height:210px; */
       /* position: relative; */
       /* height:80px; */
       /* width:400px; */
       border-radius:7px;
   }


   @media screen and (max-width:478px){
    .container{
      display:flex;
    flex-direction:column;
    }
   
   }
   @media screen and (max-width:768px){
    .container{
      display:flex;
    flex-direction:column;
    }
   
   }
`