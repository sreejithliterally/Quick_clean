import React from 'react'
import { styled } from 'styled-components';
import Navbar from './Navbar';
import quickclean from '../../public/img/quickclean.svg'
const Section = styled.div`
height:100vh;
width:100vw;
scroll-snap-align: center;
display: flex;
flex-direction: column;
//align-items:center;
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
margin-botton:15px;
margin-left:150px;
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
height:100px;
width:100px;
`;
const Subtitle = styled.h2`

`;
const Desc = styled.p`

`;

const Right = styled.div`
flex:3;
`;
const Img = styled.img`
margin-top:15px; 
margin-left:100px;
height: 700px;
width:550px;
animation: animate 2s infinite ease alternate;

@keyframes animate{
  to{
    transform: translateY(20px);
  }
}
`;

const Hero = () => {
  return (
    <Section>
    <Navbar/>
    <Container>
      <Left>
          <img src={quickclean} alt=""/> 
        <Desc>hdshisbur rb uhdvudvhuzv vgf ugfuhvufxvh yfgy fyvh fbfv  r7ev dv  gvusf u dvv v v fvdh
          jvjvbdjvjdvhjdzvhjdvjdhnvikdhvkdnvjdnjvdvjmnvdmkn mn hhjvhj  gvhv hbn bmvhmbjmhbhbbuvkhg
        </Desc>
      </Left>
      <Right>
        {/*3d model*/}
        <Img src="./img/bluehero1.svg"/>
      </Right>
    </Container>
    </Section>
  );
}

export default Hero
