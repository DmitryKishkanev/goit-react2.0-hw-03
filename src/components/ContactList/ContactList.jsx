import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={style.contactList}>
      <Contact contacts={contacts} />
    </ul>
  );
};

export default ContactList;
