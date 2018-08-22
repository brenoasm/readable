import React from 'react';
import { Field } from 'react-final-form';

const PostForm = () => (
  // <form onSubmit={handleSubmit}>
  <form>
    <h2>Simple Default Input</h2>
    <div>
      <label>First Name</label>
      <Field name="firstName" component="input" placeholder="First Name" />
    </div>

    <h2>Render Function</h2>
    <Field
      name="bio"
      render={({ input, meta }) => (
        <div>
          <label>Bio</label>
          <textarea {...input} />
          {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
      )}
    />

    {/* <button type="submit" disabled={pristine || invalid}>
      Submit
    </button> */}
  </form>
);

export default PostForm;
