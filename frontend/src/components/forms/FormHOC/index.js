import React, { Component, Fragment } from 'react';

import Input from '../Input';

const validationTest = (value) => {
  if (value.length < 2)
    return 'Length < que 2';
};

class FormHOC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPost: {
        id: '',
        timestamp: '',
        title: {
          value: '',
          validations: [validationTest],
          errors: [],
          isDirty: false
        },
        body: '',
        author: '',
        category: '',
      },
      categories: ['react', 'redux', 'udacity']
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const value = e.target.value;
    const name = e.target.name;
    const prevPost = this.state.newPost[name];

    //Fazer validações
    const errors = prevPost.validations.map(validation => validation(value));

    this.setState(prevState => {

      return {
        newPost: {
          ...prevState.newPost,
          [name]: {
            ...prevPost,
            value: value,
            isDirty: prevPost.value !== value,
            errors
          }
        }
      }
    }, () => console.log(this.state));
  }

  handleSubmit() {
    console.log('SUBMIT========')
  }

  handleClearForm() {
    console.log('CLEAR=========')
  }

  render() {
    return (
      <Fragment>
        <Input
          className=""
          id="teste"
          name="title"
          type="text"
          errors={this.state.newPost.title.errors}
          value={this.state.newPost.title.value}
          handleChange={this.handleInput}
          placeholder="Testando"
        />
      </Fragment>
    );
  }
}

export default FormHOC;
