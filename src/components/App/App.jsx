import { useState } from 'react';
import initialContacts from '@/contacts.json';
import ContactList from '../ContactList';
import SearchBox from '../SearchBox';
import style from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className={style.app}>
      <h1 className={style.title}>Phonebook</h1>
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} />
    </div>
  );
}
