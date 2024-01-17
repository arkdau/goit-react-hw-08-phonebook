import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { logout } from "../../redux/auth/operations";
import { selectIsLoggedIn, selectUserName } from "../../redux/auth/selectors";

const UnauthorizedNav = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
};

const AuthorizedNav = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());

  };
  return (
    <>
      <NavLink to="/">Home</NavLink>
      {/*<NavLink to="/tasks">Tasks</NavLink>*/}
      <NavLink to="/contacts">Contacts</NavLink>
      Welcome {userName}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? <AuthorizedNav /> : <UnauthorizedNav />}
      <Outlet />
    </div>
  );
};

export default UserMenu;
