import { useId } from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import style from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  const fieldNameId = useId();

  return (
    <Formik>
      <div className={style.searchBox}>
        <label htmlFor={fieldNameId} className={style.label}>
          Find contacts by name
        </label>
        <Field
          className={style.field}
          type="text"
          value={value}
          id={fieldNameId}
          onChange={e => onFilter(e.target.value)}
        />
      </div>
    </Formik>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default SearchBox;
