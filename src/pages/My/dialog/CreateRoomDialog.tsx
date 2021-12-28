import { doc, setDoc } from 'firebase/firestore';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import * as Yup from 'yup';
import { Button, Modal, ModalBody, ModalFooter } from '../../../components';
import { auth, db } from '../../../setup/firebase';
import { ID } from '../../../utils';

type CreateRoomDialogProps = {
  show: boolean;
  // eslint-disable-next-line no-unused-vars
  onHide: (show: boolean) => void;
};

interface Values {
  eventName: string;
}

const validateSchema = Yup.object().shape({
  eventName: Yup.string().required('*Required'),
});

const CreateRoomDialog = (props: CreateRoomDialogProps) => {
  const { show, onHide } = props;

  const [user] = useAuthState(auth);

  const handleSubmit = async (values: Values) => {
    try {
      // Generate ID
      const id = ID();
      await setDoc(doc(db, 'rooms', id), {
        name: values.eventName,
        createdBy: user?.email,
        createdAt: new Date(),
      });
      onHide(!show);
    } catch (error) {
      console.error('create room error: ', error);
    }
  };

  return (
    <Modal title="Create event" show={show} onHide={onHide}>
      <Formik
        className="flex flex-col"
        initialValues={{ eventName: '' }}
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Form */}
            <ModalBody>
              <div className="mb-2">
                <Field
                  id="event_name"
                  name="eventName"
                  title="Event Name"
                  placeholder="Event name: ex. Morning meeting"
                  className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus-visible:outline-none focus:border-blue-500 block w-full p-2.5 invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
                <ErrorMessage
                  name="eventName"
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

export default CreateRoomDialog;
