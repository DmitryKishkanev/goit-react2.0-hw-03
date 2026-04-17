import { BiSolidUser } from 'react-icons/bi';
import { BiSolidPhone } from 'react-icons/bi';
import PropTypes from 'prop-types';
import style from './Contact.module.css';

const Contact = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li className={style.contactItem} key={id}>
          <div className={style.contactBox}>
            <p className={style.contactContent}>
              <BiSolidUser />
              {name}:
            </p>
            <p className={style.contactContent}>
              <BiSolidPhone />
              {number}
            </p>
          </div>

          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
