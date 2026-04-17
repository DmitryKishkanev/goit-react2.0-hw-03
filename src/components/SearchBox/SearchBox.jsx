import { useId } from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

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

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default SearchBox;
