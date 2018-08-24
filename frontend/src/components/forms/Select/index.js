import React from 'react';

const Select = props => (
  <div>
    <label htmlFor={props.name}>{props.title}</label>
    <select
      id={props.id}
      className={props.className}
      name={props.name}
      value={props.value}
      onChange={props.handleChange}>
      {Array.isArray(props.options) && props.options.map(option => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

export default Select;
