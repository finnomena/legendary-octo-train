import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../../store/atoms/user';

interface JoinFormValues {
  displayNmae: string;
}

type JoinFormProps = {
  code: string;
};

const JoinForm = (props: JoinFormProps) => {
  const { code } = props;
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();
  const initialValues: JoinFormValues = { displayNmae: '' };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        setUser({
          displayName: values.displayNmae,
        });
        navigate(`/join/room/${code}`, { replace: true });
        actions.setSubmitting(false);
      }}
    >
      <Form className="flex flex-col gap-4">
        <Field
          id="displayNmae"
          name="displayNmae"
          type="text"
          placeholder="Your display name"
          required
          className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-center rounded-lg focus:ring-blue-500 focus-visible:outline-none focus:border-blue-500 block w-full p-2.5"
        />

        <button
          type="submit"
          className="bg-white text-gray-700 border border-gray-300 text-center px-4 py-2  shadow-sm focus:ring-2 focus:ring-offset-2 ring-offset-gray-50 ring-blue-500 font-semibold rounded-lg"
        >
          Join
        </button>
      </Form>
    </Formik>
  );
};

export default JoinForm;
