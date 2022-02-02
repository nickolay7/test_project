import { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import useAppContext from '../hoc/useAppContext';


const EditForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const path = state?.from?.pathname || '/';
  const { contacts } = useAppContext();
  const contact = contacts.find((item) => item.id === id);
  const [emailValue, setEmailValue] = useState(contact.email);
  const onEdit = (e) => {
    const currentValue = e.target.name.value;
    setEmailValue(() => currentValue);
  };
  const onSave = (e) => {
    e.preventDefault();
    console.log(e.target.name.value)
    contact.email = e.target.name.value;
    navigate(path, { replace: true });
  };

  return (
    <div>
      <h3 className="text-center">Edit contact</h3>
      <form method="POST" className="mx-auto w-25" onSubmit={onSave}>
        <div className="form-group row mb-3">
          <input type="text" name="name" className="form-control" id="inputEmail3" value={ emailValue } onChange={onEdit}/>
        </div>
        <div className="form-group row">
          <button type="submit" className="btn btn-primary">Edit</button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
