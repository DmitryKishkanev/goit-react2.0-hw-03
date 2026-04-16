import { BiSolidUser } from 'react-icons/bi';
import { BiSolidPhone } from 'react-icons/bi';
import style from './Contact.module.css';

const Contact = ({ contacts }) => {
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

          <button type="button">Delete</button>
        </li>
      ))}
    </>
  );
};

export default Contact;
