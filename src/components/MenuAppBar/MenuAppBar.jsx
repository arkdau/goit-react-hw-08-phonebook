import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, RouterLink } from "react-router-dom";
import { logout } from "../../redux/auth/operations";
import { selectIsLoggedIn, selectUserName } from "../../redux/auth/selectors";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const UnauthorizedNav = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/*<IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>*/}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Phonebook
            </Typography>

            <NavLink to="/login">
              <div>
                <BottomNavigation
                  // sx={{ width: 500 }}
                  sx={{ bgcolor: "inherit", color: "white" }}
                  // value={value}
                  // onChange={}
                >
                  <BottomNavigationAction
                    label="Login"
                    value="login"
                    icon={<LoginIcon sx={{ color: "white" }} />}
                  />
                </BottomNavigation>
              </div>
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>
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



      <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Contacts
      </Typography>

      <NavLink to="/login">
        <div>
          <BottomNavigation
            // sx={{ width: 500 }}
            sx={{ bgcolor: "inherit", color: "white" }}
            // value={value}
            // onChange={}
          >
            <BottomNavigationAction
              label="Login"
              value="login"
              icon={<LoginIcon sx={{ color: "white" }} />}
            />
          </BottomNavigation>
        </div>
      </NavLink>
    </Toolbar>
  </AppBar>
</Box>

    </>
  );
};

const MenuAppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? <AuthorizedNav /> : <UnauthorizedNav />}
      <Outlet />
    </div>
  );
};

export default MenuAppBar;
