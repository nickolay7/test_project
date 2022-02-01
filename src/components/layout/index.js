import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-secondary opacity-75">
          <h3 className="navbar-brand my-auto mx-3">Test</h3>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink to='/' className="nav-link mx-3">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contacts" className="nav-link mx-3">Contacts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link mx-3">Login</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
      <footer className="fixed-bottom text-center">Nickoloz@2022</footer>
    </>
  );
};

export default Layout;
