import React from 'react';
import { serverTimestamp } from 'firebase/database';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useParams } from 'react-router';
import * as Yup from 'yup';
import { Button, Modal, ModalBody, ModalFooter } from '../../../components';
import { IQuestion } from '../../../interfaces';
import { createQuestionByRoomId } from '../../../queries';
import { JoinParams } from '../../../types';

type CreateQuestionProps = {
  show: boolean;
  // eslint-disable-next-line no-unused-vars
  onHide: (show: boolean) => void;
};

const validateSchema = Yup.object().shape({
  question: Yup.string().required('*Required'),
});

const CreateQuestion = (props: CreateQuestionProps) => {
  const { show, onHide } = props;
  const { id } = useParams<keyof JoinParams>() as JoinParams;
  const initialValues: IQuestion = {
    question: '',
    isAnswer: false,
    createdAt: serverTimestamp(),
  };

  const handleSubmit = async (values: IQuestion) => {
    try {
      await createQuestionByRoomId(id, values);
      onHide(!show);
    } catch (error) {
      console.error('create room error: ', error);
    }
  };

  return (
    <Modal title="Create Question" show={show} onHide={onHide}>
      <Formik
        className="flex flex-col"
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Form */}
            <ModalBody>
              <div className="mb-2">
                <Field
                  id="question"
                  name="question"
                  title="Your message"
                  placeholder="type here..."
                  className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus-visible:outline-none focus:border-blue-500 block w-full p-2.5 invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                <ErrorMessage
                  name="question"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>
            </ModalBody>

            {/* Footer */}
            <ModalFooter>
              <Button type="submit" full disabled={isSubmitting}>
                Create
              </Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateQuestion;
