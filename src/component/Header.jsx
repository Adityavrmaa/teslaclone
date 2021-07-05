import React,{useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
const [burgerOpen,setburgerClose] = useState(false);


    return (
        <Container>
         <a href="#b">  <img src="/images/logo.svg" alt="" /> </a>
       
        <Menu>
           <a href="/" >Model S</a> 
           <a href="/">Model 3</a> 

           <a href="#j">Model X</a> 
           <a href="#j">Model Y</a> 
           <a href="#j">Solar Roof</a> 
           <a href="#j">Solar Panels</a> 
      

        </Menu>

        <RightMenu>
       <a href="#k">Shop</a>
       <a href="#k"> Account</a>
       {/* <a href="#">Menu</a> */}
       <CustomMenu onClick={()=>setburgerClose(true)}/>
        </RightMenu>
    
    <BurgerNav show={burgerOpen}>
    <CloseWrapper>
    <CustomClose onClick={()=>setburgerClose(false)}/>
    </CloseWrapper>
     <li> <a href="#1" > Existing Inventory </a>  </li>
     <li> <a href="#1" >  Used Inventory </a>  </li>
     <li> <a href="#1" > Trade-In   </a>  </li>
     <li> <a href="#1" >  Test Drive </a>  </li>
     <li> <a href="#1" > Cybertruck </a>  </li>
     <li> <a href="#1" >  Roadster </a>  </li>
     <li> <a href="#1" >  Semi </a>  </li>
     <li> <a href="#1" >  charging </a>  </li>
     <li> <a href="#1" >  Powerwall </a>  </li>
      <li> <a href="#1" >  Commercial Energy </a>  </li>
      <li> <a href="#1" >  Utilities </a>  </li>
      <li> <a href="#1" >  Find Us </a>  </li>
      <li> <a href="#1" > Support </a>  </li>
    </BurgerNav>

        </Container>
    )
}

export default Header

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
top:0;
right:0;
left:0;
z-index:1;
` 

const Menu = styled.div`
display:flex; 
align-items:center;
justify-content:center;
flex:1;

                a{
                font-weight:600;
                padding:0 15px;
                flex-wrap:nowrap;
                }

         @media(max-width:768px){
         display:none;
        

            }
`

const RightMenu =styled.div`
display:flex;
align-items:center;
 a{
 font-weight:600;
 margin-right:10px;
 flex-wrap:nowrap;
 }


`

const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`

const BurgerNav =styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
  background-color:white;
width:300px;
list-style:none;
padding:30px;
transition:transform 0.2s  ease-in-out;
transform:${props =>props.show ? 'translateX(0)' : 'translateX(100%);' };

  li{ 
      padding:12px 0;
   a{
       font-weight:600;
   }
  }
`

const CustomClose =  styled(CloseIcon)`
  cursor:pointer;

`


const CloseWrapper  =  styled.div`
  display:flex;
  justify-content:flex-end;

`