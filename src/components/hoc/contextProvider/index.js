import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const Context = createContext(null);

export const AppContext = ({ children }) => {
  const [user, setUser] = useState();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setContacts(data);
    }());
  }, []);

  const addContact = (contact, cb) => {
    setContacts([contact, ...contacts]);
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
