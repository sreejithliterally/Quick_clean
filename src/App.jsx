import React from 'react';
import Hero from './components/Hero';
import Works from './components/Works';
import Contact from './components/Contact';
import { styled } from 'styled-components';
import LaundryServices from './components/services';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  scrollbar-width: none;
  color: black;
  /* Add any other styles you need for this component */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Horizontally center-align the children */
  align-items: center; /* Vertically center-align the children */
  padding: 10px;
`;


function App() {
  return (
    <Container>
      <Hero />
      <Works />
      <Contact />
      <Content>
        <LaundryServices />
      </Content>
    </Container>
  );
}

export default App;
