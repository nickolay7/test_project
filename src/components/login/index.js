import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import useAppContext from '../hoc/useAppContext';

const Login = () => {
  const [errors, setErrors] = useState();
  const { state } = useLocation();
  const navigate = useNavigate();
  const path = state?.from?.pathname || '/';
  const { login, user } = useAppContext();
  const onSignIn = async (e) => {
    e.preventDefault();
    const { data: { name, error } } = await axios.post('http://localhost:5000/api', { name: e.target.name.value });
    console.log(name, error)
    if (name) {
      login(name, () => {
        navigate(path, { replace: true });
      });
    }
    setErrors(error);
  };

  return (
    <div>
      <h3 className="text-center">Sign in</h3>
      <form method="POST" className="mx-auto w-25" onSubmit={onSignIn}>
        <div className="form-group row mb-3">
          <input type="text" name="name" className="form-control" id="inputEmail3" placeholder="Name" />
        </div>
        <div className="form-group row">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>
      {errors && <h5 className="text-center mt-3 text-danger">{ errors }</h5>}
    </div>
  );
}

export default Login;
