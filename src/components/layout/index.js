import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {

  return (
    <>
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-secondary opacity-75">
          <img className="rounded-circle mx-3" src="https://w7.pngwing.com/pngs/803/598/png-transparent-phoenix-logo-phoenix-red-bird-illustration-leaf-photography-mirror.png" width="70px" alt="pic"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink to='/' className="nav-link mx-3">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/toDoList" className="nav-link mx-3">Todo List</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
      <footer className="fixed-bottom text-center p-3 bg-secondary">Nickoloz@2022</footer>
    </>
  );
};

export default Layout;
