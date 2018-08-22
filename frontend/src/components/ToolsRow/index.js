import React from 'react';
import styled from 'styled-components';

import Button from '../Button/';

const StyledToolsRow = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    border-radius: 3px;
    margin-right: 10px;

    a {
      text-decoration: none;
    }
  }

  & > span {
    align-self: center;

    select {
      height: 34px;
      cursor: pointer;
    }
  }
`;

const ToolsRow = ({
  options,
  selectedOption,
  onFilterChange,
  toggleModal }) => (
  <StyledToolsRow>
    <Button
      text="Adicionar Postagem"
      handleClick={() => toggleModal()}
    />
    <span>
      <label htmlFor="select-sort-method">Filtrar por: </label>
      <select value={selectedOption}
        name="select-sort-method"
        onChange={(event) => onFilterChange(event.target.value)}>
        {Array.isArray(options) && options.map(op => (
          <option key={op.value} value={op.value}>{op.text}</option>
        ))}
      </select>
    </span>
  </StyledToolsRow>
);

export default ToolsRow;
