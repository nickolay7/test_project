import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import useAppContext from '../hoc/useAppContext';


const AddForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const path = state?.from?.pathname || '/';
  const { addContact } = useAppContext();
  const onAdd = (e) => {
    e.preventDefault();
    const data = { email: e.target.name.value, id: nanoid() };
    if (data) {
      addContact(data, () => {
        console.log(data)
        navigate(path, { replace: true });
      });
    }
  };

  return (
    <div>
      <h3 className="text-center">Add contact</h3>
      <form method="POST" className="mx-auto w-25" onSubmit={onAdd}>
        <div className="form-group row mb-3">
          <input type="email" name="name" className="form-control" id="inputEmail3" placeholder="new contact..." />
        </div>
        <div className="form-group row">
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
