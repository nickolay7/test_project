import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import useAppContext from '../hoc/useAppContext';
import AddTask from '../addForm';

const ToDoList = () => {
  const { contacts, updateContacts } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(() => e.target.value);
  }

  const onEditForm = (id) => navigate(`/edit/${id}`, { state: { from: location } });
  const onDelete = (id) => {
    const newList = contacts.filter((contact) => id !== contact.id);
    updateContacts(newList);
  };

  const filteredData = search === ''
    ? contacts
    : contacts.filter(({ title }) => title.toLowerCase().indexOf(search.toLowerCase()) !== -1);

  const onSelectedPage = (page) => {
    setCurrentPage(page);
  };

  // pagenation
  const tasksOnPage = 3;
  const countPages = Math.ceil(filteredData.length / tasksOnPage);
  const pagesNav = [];
  for (let i = 1; i <= countPages; i += 1) {
    pagesNav.push(i);
  }

  const filterByPage = (page) => {
    const lastIndex = page * tasksOnPage;
    const firstIndex = lastIndex - tasksOnPage;
    return filteredData.slice(firstIndex, lastIndex);
  };

  const visibleData = filterByPage(currentPage);

  const view = visibleData
    .map(({ id, title }) =>
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
        <span className="mx-3">{ title }</span>
      </li>);

  return (
    <div className="w-50 mx-auto">
      <h1 className="text-center my-3">Todo List</h1>
      <input
        type="search"
        name="search" 
        value={search}
        onInput={handleSearch}
        className="form-control input-item mb-2 px-2"
        placeholder="search..."/>
      {
        pagesNav.map((el) => <span
          key={nanoid()}
          onClick={() => onSelectedPage(el)}
          className={`mx-1 p-1 rounded-circle ${el === currentPage && 'text-white bg-success'}`}
          >{el}</span>)
      }
      <ul className="list-unstyled mt-2">
        {view}
      </ul>
      <AddTask />
    </div>
  );
};

export default ToDoList;
