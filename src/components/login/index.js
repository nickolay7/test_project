import React from 'react';
import axios from 'axios';

const Login = (props) => {
  const onSignIn = async (e) => {
    e.preventDefault();
    // console.log(e.target.name.value);
    const { data } = await axios.post('http://localhost:5000/api', { name: e.target.name.value });
    console.log(data);
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
    </div>
  );
}

export default Login;
