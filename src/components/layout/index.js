import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import useAppContext from "../hoc/useAppContext";

const Layout = () => {
  const { logout, user } = useAppContext();
  const navigate = useNavigate();

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
                {
                  user
                    ? <button className="btn btn-link text-decoration-none text-dark" onClick={
                        () => logout(() => navigate('/', { replace: true }))}
                      >Logout</button>
                    : <NavLink to="/login" className="nav-link mx-3">Login</NavLink>
                }
              </li>
              {user && <h5 className="my-auto ms-5">{`Hello, ${user}!`}</h5>}
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
