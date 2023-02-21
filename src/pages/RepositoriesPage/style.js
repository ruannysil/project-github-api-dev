import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.background};
  min-width: 20rem;
  min-height: 100vh;
  overflow-y: hidden;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    min-height: 20vh;
  }
`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.container};
  width: 100%;
  height: 100vh;
  padding: 40px;
  overflow-y: hidden;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 40px 20px;
    height: 100vh;
  }
`;
