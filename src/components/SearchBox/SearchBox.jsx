import { useId } from 'react';
import { Formik, Field } from 'formik';

const SearchBox = ({ value, onFilter }) => {
  const fieldNameId = useId();

  return (
    <Formik>
      <>
        <label htmlFor={fieldNameId}>Find contacts by name</label>
        <Field
          type="text"
          value={value}
          id={fieldNameId}
          onChange={e => onFilter(e.target.value)}
        />
      </>
    </Formik>
  );
};

export default SearchBox;
