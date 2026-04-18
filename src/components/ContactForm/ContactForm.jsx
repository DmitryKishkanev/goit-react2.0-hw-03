import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

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
      <Form className={style.form}>
        <div className={style.fieldBox}>
          <label className={style.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={style.field}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            className={style.errorMessage}
            name="name"
            component="span"
          />
        </div>

        <div className={style.fieldBox}>
          <label className={style.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={style.field}
            type="phone"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage
            className={style.errorMessage}
            name="number"
            component="span"
          />
        </div>

        <button className={style.formButton} type="submit">
          Add
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ContactForm;
