import React from 'react';
import Profile from './Profile';
import Filter from './Filter';
import { Container, Main, Sidebar } from './style';
import Repositories from './Repositories';

function RepositoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
