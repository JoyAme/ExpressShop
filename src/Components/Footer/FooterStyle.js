import { styled } from 'styled-components';


export const FooterWrap = styled.div`
    /* width:100%; */
    background:black;
    color:white;
    margin-top:6px;
    padding-top:80px;
    padding-bottom:50px;

    h4 {
        font-size:12px;
    }

    .wrapper {
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        /* background:red; */
    }

    .wrap {
        padding-left:32px;
        font-family:Roboto;
        font-weight:400;
    }
    .wrap h4 {
        color:#BEBEBE;
    }

    select {
        padding:6px 20px;
        background:#101010;
        border:1px solid grey;
        border-radius:5px;
        color:white;
        font-size:15px;
    }

    li {
        color:#BEBEBE;
        font-family:Roboto;
        font-weight:400;
        list-style:none;
        margin-bottom:18px;
        text-decoration:underline;
        font-size:16px;
        
    }

@media screen and (max-width:480px){

}
`



export const RowWrap=styled.div`
display:flex;
justify-content:center;
gap:99px;
align-items:center;
@media screen and (max-width:480px){
    display:flex;
    flex-direction:column;
    gap:0px;
    align-items:flex-start;
    justify-content:left;
}
`