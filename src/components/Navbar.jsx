import React from 'react'
import { styled } from 'styled-components';

const Section = styled.div`
display: flex;
justify-content: center;
`;

const Container = styled.div`
width: 1400px;
display:flex;
justify-content:space-between;
align-items: center;
padding: 10px 0px;
`;

const Links = styled.div`
display:flex;
align-items: center;
gap: 20px;
`;

const Logo = styled.img`
`;
const List = styled.ul`
display:flex;
list-style: none;
gap: 20px;
`;
const ListItem = styled.li`
`;
const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
        <Logo src="/"></Logo>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Contact Us</ListItem>
        </List>
        </Links>
        </Container>
    </Section>
  )
}

export default Navbar
