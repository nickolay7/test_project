import { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import useAppContext from '../hoc/useAppContext';


const AddForm = () => {
  const [task, setTask] = useState('');
  const { addContact } = useAppContext();
  const input = useRef();
  const onAdd = (e) => {
    e.preventDefault();
    if (task) {
      addContact({ title: task, id: nanoid() });
      input.current.value = '';
    }
  };

  const changeHandle = (e) => {
    setTask(e.target.value);
  }

  return (
    <div className="d-flex">
      <input
        type="text"
        ref={input}
        placeholder="add task..."
        className="form-control input-item"
        onChange={changeHandle}
      />
      <button
        className="btn btn-outline-secondary mx-1"
        onClick={onAdd}
      >Add
      </button>
    </div>
  );
}

export default AddForm;
