import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

type InputProps = {
  title: string;
};

const Input = (
  props: InputProps & React.InputHTMLAttributes<HTMLInputElement>
) => {
  const { id = undefined, title } = props;
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {title}
      </label>
      <Field
        {...props}
        className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus-visible:outline-none focus:border-blue-500 block w-full p-2.5"
      />
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Input;
