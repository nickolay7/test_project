import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import useAppContext from '../hoc/useAppContext';

const Contacts = () => {
  const { contacts, updateContacts } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(() => e.target.value);
  }

  const onAddForm = () => navigate('/add', { state: { from: location } });
  const onEditForm = (id) => navigate(`/edit/${id}`, { state: { from: location } });
  const onDelete = (id) => {
    const newList = contacts.filter((contact) => id !== contact.id);
    updateContacts(newList);
  };

  const visibleData = search === ''
    ? contacts
    : contacts.filter(({ email }) => email.toLowerCase().indexOf(search.toLowerCase()) !== -1);

  const view = visibleData
    .map(({ id, email }) =>
      <li key={ id } className="mb-1">
        <button
          type="button"
          className="btn btn-outline-success btn-sm me-1"
          aria-controls="collapseExample"
          onClick={() => onEditForm(id)}
        >
          <i className="fa fa-edit" />
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={() => onDelete(id)}
        >
          <i className="fa fa-trash-o" />
        </button>
        <span className="mx-3">{ email }</span>
      </li>);

  return (
    <div className="mx-auto">
      <h1 className="text-center my-3">Contacts</h1>
      <input type="search" name="search" value={search} onInput={handleSearch} className="form-control input-item mb-1 px-2" placeholder="search..."/>
      <ul className="list-unstyled">
        {view}
      </ul>
      <div className="text-center">
        <button className="btn btn-outline-secondary me-3" onClick={onAddForm}>Add</button>
      </div>
    </div>
  );
};

export default Contacts;
