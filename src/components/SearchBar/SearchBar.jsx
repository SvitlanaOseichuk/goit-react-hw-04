import React from 'react';
import css from './SearchBar.module.css';
import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSetsearchquery, hasResults }) => {
  const notify = () => toast('Please enter a word');

  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values, { resetForm }) => {
        if (!hasResults && values.query.trim() === '') { 
          notify();
          return;
        }

        resetForm({ values: { query: '' } });
        onSetsearchquery(values.query);
      }}
    >
      <Form className={css.header}>
        <Field
          className={css.input}
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
          name='query'
        />
        <button type='submit'>Search</button>
        <Toaster
          position='bottom-center'
          reverseOrder={false}
        />
      </Form>
    </Formik>
  );
};

export default SearchBar;
