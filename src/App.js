import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Contacts from './components/contacts';
import Layout from './components/layout';
import Secure from './components/hoc/secure';
import AddForm from './components/addForm';
import EditForm from './components/editForm';

function App() {
  return (
    <div className="d-flex flex-column justify-content-center vh-100">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='login' element={<Login />} />
          <Route path='add' element={<AddForm />} />
          <Route path='edit/:id' element={<EditForm />} />
          <Route index element={<h1 className="text-center">Welcome to my test task!</h1>} />
          <Route path='contacts' element={<Secure><Contacts /></Secure>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
