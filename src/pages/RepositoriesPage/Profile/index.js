import React from 'react';
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';
import { Container, Header, Avatar, Login, Name, Inner, Data } from './style';

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/84647446?v=4" />
        <Login>devuanny</Login>
        <Name>Dev Ruanny</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
        </Data>
        <Data>
          <MdWork size={20} />
          Dev Ruanny
        </Data>
        <Data>
          <MdLocationCity size={20} />
          São Luis - Maranhão
        </Data>
        <Data>
          <MdLink size={20} />
          <a href="https://avatars.githubusercontent.com/u/84647446?v=4">
            Image.com
          </a>
        </Data>
      </Inner>
    </Container>
  );
}

export default Profile;
