import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Input from '../Input';
import Select from '../Select';
import TextArea from '../TextArea';

const propTypes = {
  formProperties: PropTypes.object,
  handleInput: PropTypes.func
};

const defaultProps = {
  formProperties: {},
  handleInput: () => {}
};

const StyledPostForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PostForm = ({ formProperties, handleInput }) => {
  return (
    <StyledPostForm>
      <Input
        title="Autor: "
        name={formProperties.author.name}
        value={formProperties.author.value}
        errors={formProperties.author.errors}
        handleChange={handleInput}
      />
      <Input
        title="Titulo: "
        name={formProperties.title.name}
        value={formProperties.title.value}
        errors={formProperties.title.errors}
        handleChange={handleInput}
      />
      <Select
        title="Categoria: "
        name={formProperties.category.name}
        value={formProperties.category.value}
        errors={formProperties.category.errors}
        handleChange={handleInput}
        options={formProperties.category.options}
      />
      <TextArea
        title="Descrição: "
        name={formProperties.body.name}
        value={formProperties.body.value}
        errors={formProperties.body.errors}
        handleChange={handleInput}
      />
    </StyledPostForm>
  )
};

PostForm.propTypes = propTypes;
PostForm.defaultProps = defaultProps;

export default PostForm;
