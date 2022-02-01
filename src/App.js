import Login from './components/login';
import Contacts from './components/contacts';

function App() {
  return (
    <div className="d-flex flex-column justify-content-center vh-100">
      <h1 className="text-center">Test!</h1>
      <Login />
      <Contacts />
    </div>
  );
}

export default App;
