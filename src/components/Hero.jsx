import React from 'react'
import { styled } from 'styled-components';
import Navbar from './Navbar';
const Section = styled.div`
height:100vh;
width:100vw;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`;

const Container = styled.div`
height:100vh;
scroll-snap-align: center;
width:1400px;
display: flex;
justify-content: space-between;
`;

const Left = styled.div`
flex:2;
display:flex;
flex-direction: column;
justify-content:center;
gap:20px;
`;
const Title = styled.h1`

`;
const WhatWeDo = styled.div`

`;
const Line = styled.img`

`;
const Subtitle = styled.h2`

`;
const Desc = styled.p`

`;

const Right = styled.div`
flex:3;
`;
const Img = styled.img`

height: 600px;
width:750px;

`;

const Hero = () => {
  return (
    <Section>
    <Navbar/>
    <Container>
      <Left>
        <Title>Quickclean</Title>
        <WhatWeDo>
          <Line src="./img/cloud.png"/>
          <Subtitle>What we do</Subtitle>
        </WhatWeDo>
        <Desc>Hi guyss...</Desc>
      </Left>
      <Right>
        {/*3d model*/}
        <Img src="./img/qc5.png"/>
      </Right>
    </Container>
    </Section>
  );
}

export default Hero
