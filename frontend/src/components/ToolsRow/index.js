import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../Button/';

const propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  selectedOption: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onFilterChange: PropTypes.func,
  showModal: PropTypes.func,
};

const defaultProps = {
  options: [],
  selectedOption: '',
  onFilterChange: () => {},
  showModal: () => {}
};

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

const ToolsRow = ({ options, selectedOption, onFilterChange, showModal }) => (
  <StyledToolsRow>
    <Button text="Adicionar Postagem" handleClick={() => showModal()} />
    <span>
      <label htmlFor="select-sort-method">Filtrar por: </label>
      <select
        value={selectedOption}
        name="select-sort-method"
        onChange={event => onFilterChange(event.target.value)}
      >
        {Array.isArray(options) &&
          options.map(op => (
            <option key={op.value} value={op.value}>
              {op.text}
            </option>
          ))}
      </select>
    </span>
  </StyledToolsRow>
);

ToolsRow.propTypes = propTypes;
ToolsRow.defaultProps = defaultProps;

export default ToolsRow;
