import React from 'react';
import css from './SearchBar.module.css';
import { Field, Form, Formik } from 'formik';

const SearchBar = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values) => {
        onSubmit(values.query);
      }}
    >
      <Form>
        <Field
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;

