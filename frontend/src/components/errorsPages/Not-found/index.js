import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNotFound = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;

  > div:first-child {
    font-size: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > div:nth-child(2) {
    align-self: center;
    margin-top: 50px;

    a {
      font-weight: 600;
    }
  }
`;

const NotFound = () => (
  <StyledNotFound>
    <div>
      <h2>Ops...</h2>
      <div>
        <p>A página que você está tentando acessar não existe.</p>
      </div>
    </div>
    <div>
      <Link to="/">Ir para a página principal</Link>
    </div>
  </StyledNotFound>
);

export default NotFound;
