import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Input from '../Input';
import Select from '../Select';
import TextArea from '../TextArea';

const propTypes = {
  properties: PropTypes.object,
  handleInput: PropTypes.func
};

const defaultProps = {
  properties: {},
  handleInput: () => {}
};

const StyledPostForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PostForm = ({ properties, handleInput }) => {
  return (
    <StyledPostForm>
      <Input
        title="Autor: "
        name={properties.author.name}
        value={properties.author.value}
        errors={properties.author.errors}
        handleChange={handleInput}
      />
      <Input
        title="Titulo: "
        name={properties.title.name}
        value={properties.title.value}
        errors={properties.title.errors}
        handleChange={handleInput}
      />
      <Select
        title="Categoria: "
        name={properties.category.name}
        value={properties.category.value}
        errors={properties.category.errors}
        handleChange={handleInput}
        options={properties.category.options}
      />
      <TextArea
        title="Descrição: "
        name={properties.body.name}
        value={properties.body.value}
        errors={properties.body.errors}
        handleChange={handleInput}
      />
    </StyledPostForm>
  )
};

PostForm.propTypes = propTypes;
PostForm.defaultProps = defaultProps;

export default PostForm;
