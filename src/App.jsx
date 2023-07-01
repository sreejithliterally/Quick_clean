import React from 'react';
import Hero from "./components/Hero"
import Works from "./components/Works"
import Contact from './components/Contact';
import { styled } from 'styled-components';

const Container = styled.div`
height:100vh;
width:100vw;
scroll-snap-type: y mandatory;
scroll-behaviour: smooth;
overflow-y: auto;
scrollbar-width: none;
color:black;
background: url("./img/slanted-gradient.png");
&::-webkit-scrollbar{
  display: none;
}
`;
 function App() {
  return (
    <Container>
      <Hero/>
      <Works/>
      <Contact/>
    </Container>
  );
}
export default App