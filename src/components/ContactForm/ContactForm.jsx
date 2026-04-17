import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { object, string } from 'yup';
import PropTypes from 'prop-types';

const FeedbackSchema = object().shape({
  name: string().min(3, 'Too Short!').max(50, 'Too Lonf!').required('Required'),
  number: string()
    .min(3, 'Too Short!')
    .max(50, 'Too Lonf!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, { resetForm }) => {
    const contact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    onAdd(contact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}></label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberFieldId}></label>
        <Field type="phone" name="number" id={numberFieldId} />
        <ErrorMessage name="number" component="span" />

        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ContactForm;
