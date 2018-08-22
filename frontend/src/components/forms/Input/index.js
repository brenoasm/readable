import React from 'react';

const Input = props => {
  return (
    <div>
      <label htmlFor={props.name}>{props.title}</label>
      <input
        className={props.className}
        type={props.type}
        value={props.value}
        id={props.id}
        name={props.name}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
      <div>
        {props.errors && props.errors.map(error => (
          <span style={{ color: '#fe0303' }}>{error}</span>
        ))}
      </div>
    </div>
  );
}

export default Input;
