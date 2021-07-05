import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
          <Section
              title="Model S"
              desc="Order Online for Touches Delivery"
              backgroundImg="model-s.jpg"
              leftBtnText="custom order"
              rightBtnText="Existing inverntory"
          />
          <Section
              title="Model Y"
              desc="Order Online for Touchless Delivery"
              backgroundImg="model-Y.jpg"
              leftBtnText="custom order"
              rightBtnText="Existing inverntory"
          />
            <Section
              title="Model 3"
              desc="Order Online for Touchless Delivery"
              backgroundImg="model-3.jpg"
              leftBtnText="custom order"
              rightBtnText="Existing inverntory"
          />
            <Section
              title="Model X"
              desc="Order Online for Touchless Delivery"
              backgroundImg="model-x.jpg"
              leftBtnText="custom order"
              rightBtnText="Existing inverntory"
          />

            <Section
              title="Solar Panels"
              desc="Lowest Cost Solar Panels in America"
              backgroundImg="solar-panel.jpg"
              leftBtnText="Order Now"
              rightBtnText="learn more"
          />
             <Section
              title="Solar Roof"
              desc="Produce Clean Energy From Your Roof"
              backgroundImg="solar-roof.jpg"
              leftBtnText="Order Now"
              rightBtnText="learn more"
          />
           <Section
              title="Accessories"
              backgroundImg="accessories.jpg"
              leftBtnText="Shop now"
          />
        
        
        </Container>
    )
}

export default Home

// css style for style components  
const Container = styled.div`
height:100vh;
`
