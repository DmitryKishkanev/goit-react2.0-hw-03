import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={style.contactList}>
      <Contact contacts={contacts} onDelete={onDelete} />
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
