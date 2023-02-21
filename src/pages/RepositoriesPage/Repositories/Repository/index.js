import React from 'react';
import { Container, Description, Footer, Lang, Link, Name } from './style';

function Repository() {
  return (
    <Container color="#f37272">
      <Name>Repository Name</Name>
      <Description>Repository Description</Description>
      <Footer color="#f37272">
        <Lang>Repository Lang</Lang>
        <Link href="https://ruannynoleto.vercel.app/" target="_blank">
          Ver
        </Link>
      </Footer>
    </Container>
  );
}

export default Repository;
