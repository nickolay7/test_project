import { createContext, useState } from 'react';
import { nanoid } from 'nanoid';

export const Context = createContext(null);

export const AppContext = ({ children }) => {
  const [user, setUser] = useState();
  const [contacts, setContacts] = useState([
    { email: 'Sincere@april.biz', id: nanoid() },
    { email: 'Julianne.OConner@kory.org', id: nanoid() },
    { email: 'Karley_Dach@jasper.info', id: nanoid() },
   ]);
  const addContact = (contact, cb) => {
    setContacts([...contacts, contact]);
    cb && cb();
  };
  const updateContacts = (contacts) => {
    setContacts(contacts);
  };
  const login = (newUser, cb) => {
    setUser(newUser);
    cb();
  };
  const logout = (cb) => {
    setUser(null);
    cb();
  }

  const value = { user, contacts, login, logout, addContact, updateContacts };

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>);
};
