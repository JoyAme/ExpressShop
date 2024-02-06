import {createGlobalStyle} from 'styled-components'
import {styled} from 'styled-components'


export const GlobalStyle=createGlobalStyle`
*{
    margin:0;
padding:0;
}
body{
    font-family:Open Sans,Roboto,Arial,Helvetica,sans-serif;
}



`
export const Container=styled.div`
     width:80%;
     margin:auto;

`
export const Row=styled.div`
    display:flex;
    padding:20px 0px;
    /* gap:20px; */
    align-items:center;
    justify-content:space-around;
@media screen and (max-width:478px){
    padding:5px 0px;
}
`
export const ButtonStyle=styled.button`
 background:whitesmoke;
 border:none;
 cursor:pointer;
 color:black;
 font-size:16px;
 border-radius:28px;
 padding:12px 20px;

`