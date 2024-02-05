import {styled} from 'styled-components'


export const HeroWrap=styled.div`
background:black;
width:100%;
color:white;
.Hero-dropdown{
    border:1px solid white;
    padding:8px 25px;
    width:200px;
    border-radius:19px;
    display:flex;
    justify-content:space-between;
}
.Hero-dropdown:hover{
    background: rgb(243, 242, 240);
    color:black;
}
.Hero-info{
    padding:8px 15px;
}
.Hero-info:hover{
    background: rgb(243, 242, 240);
    color:black;
    cursor:pointer;
    /* padding:10px ; */
    border-radius:19px;
}
@media screen and (max-width:478px) {
    .Hero-info{
   font-size:12px;
}
.infoo{
    display:none;
}
}
`