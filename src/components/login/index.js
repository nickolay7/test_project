import React from 'react';

const Login = (props) => (
  <form className="mx-auto w-25">
      <div className="form-group row mb-3">
          <input type="name" className="form-control" id="inputEmail3" placeholder="Name" />
      </div>
      <div className="form-group row">
          <div className="btn btn-primary">Sign in</div>
      </div>
  </form>
);

export default Login;
