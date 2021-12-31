import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import * as Yup from 'yup';
import { Button, Modal, ModalBody, ModalFooter } from '../../../components';
import { ICreateRoom } from '../../../interfaces';
import { createRoom } from '../../../queries';
import { auth } from '../../../setup/firebase';

type CreateRoomProps = {
  show: boolean;
  // eslint-disable-next-line no-unused-vars
  onHide: (show: boolean) => void;
};

const validateSchema = Yup.object().shape({
  name: Yup.string().required('*Required'),
});

const CreateRoom = (props: CreateRoomProps) => {
  const { show, onHide } = props;
  const [user] = useAuthState(auth);
  const initialValues: ICreateRoom = {
    name: '',
    createdBy: user?.email,
    createdAt: new Date(),
  };

  const handleSubmit = async (values: ICreateRoom) => {
    try {
      await createRoom(values);
      onHide(!show);
    } catch (error) {
      console.error('create room error: ', error);
    }
  };

  return (
    <Modal title="Create room" show={show} onHide={onHide}>
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
                  id="name"
                  name="name"
                  title="Room Name"
                  placeholder="Room: ex. Morning meeting"
                  className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus-visible:outline-none focus:border-blue-500 block w-full p-2.5 invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>
            </ModalBody>

            {/* Footer */}
            <ModalFooter>
              <Button type="submit" color="blue" full disabled={isSubmitting}>
                Create
              </Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateRoom;
