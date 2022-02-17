import { Routes, Route } from 'react-router-dom';
import ToDoList from './components/toDoList';
import Layout from './components/layout';
import AddForm from './components/addForm';
import EditForm from './components/editForm';

function App() {
  return (
    <div className="d-flex mt-5 flex-column">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='add' element={<AddForm />} />
          <Route path='edit/:id' element={<EditForm />} />
          <Route index element={<h1 className="text-center mt-5">Welcome to my test task!</h1>} />
          <Route path='toDoList' element={<ToDoList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
