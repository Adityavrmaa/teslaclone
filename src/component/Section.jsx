import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
function Section(props) {

    return (
        <Wrap bgImage={props.backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </ItemText>
            </Fade>
            <Fade bottom>  
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {props.leftBtnText}
                    </LeftButton>

                    {/* accessories button take a single action */}
                    {props.rightBtnText &&
                        <RightButton>
                            {props.rightBtnText}
                        </RightButton>
                    }

                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
            </Fade>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
width:100vw;
height:100vh;
background-image:${props => `url("/images/${props.bgImage}")`};
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
text-align:center;

`

const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`
const ButtonGroup = styled.div`
 display:flex;
margin-bottom:12px;
cursor:pointer;

justify-content: center;
@media(max-width:768px){
    display: grid;
    align-items: center;
}

`



const LeftButton = styled.div`
 background-color:rgba(23,26,32,0.8);
 height:40px;
 width:250px;
 color:white;
 display:flex;
 justify-content:center;
 align-items:center;
 border-radius:100px;
 opacity:0.85;
 text-transform:uppercase;
 font-size:12px;
 cursor:pointer;
 margin:8px;
`

const RightButton = styled(LeftButton)`
background-color:white;
opacity:0.65;
color:black;
`


const DownArrow = styled.img`
margin-top:20px;
height:40px;
cursor:pointer;
animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`