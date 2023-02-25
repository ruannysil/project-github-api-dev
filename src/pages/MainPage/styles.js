import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 50, 0.5),
      rgba(0, 0, 50, 0.6)
    ),
    url(https://github.blog/wp-content/uploads/2020/12/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?fit=1200%2C630);
  background-position: center;
  background-repeat: repeat;
  background-clip: border-box;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  width: 170px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.Title};
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 583px;
`;

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;

  &::placeholder {
    color: ${(props) => props.theme.colors.metalDark};
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 80px;
  height: 64px;
  border: 3px solid ${(props) => props.theme.colors.text};
  transition: background 0.3s;

  &:hover {
    background: ${(props) => props.theme.colors.container};
  }
`;
