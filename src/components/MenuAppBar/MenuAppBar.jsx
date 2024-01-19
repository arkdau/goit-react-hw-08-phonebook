import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "./../../redux/contacts/operations";
import { NavLink, Outlet, RouterLink, useNavigate } from "react-router-dom";
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
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Container } from "./MenuAppBar.Styled";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { menuItemClasses } from "@mui/base";

const settingsUnAuth = ["Home", "Contacts", "Register"];
const settingsAuth = ["Home", "Contacts", "New contact"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

let selectMenuItem;

const UnauthorizedNav = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  // let selectMenuItem ;
  const handleChangeInput = (evt) => {
    evt.preventDefault();
    const filter = evt.currentTarget.value;
    // setFilter(filter);
    dispatch(setStatusFilter(filter));
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (evt) => {
    evt.preventDefault();
    setAnchorElUser(null);
    selectMenuItem = evt.currentTarget.textContent;
    console.log("handleCloseUserMenu: ", selectMenuItem);
    switch (selectMenuItem) {
      case "Home":
        nav("/");
        break;
      case "Contacts":
        nav("/contacts");
        break;
      case "Register":
        nav("/register");
        break;
      case "New contact":
        nav("/login");
        break;

      default:
        break;
    }
  };

  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleOpenUserMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settingsUnAuth.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {selectMenuItem}
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
  const nav = useNavigate();
  // let selectMenuItem;

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleChangeInput = (evt) => {
    evt.preventDefault();
    const filter = evt.currentTarget.value;
    // setFilter(filter);
    dispatch(setStatusFilter(filter));
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (evt) => {
    evt.preventDefault();
    setAnchorElUser(null);
    selectMenuItem = evt.currentTarget.textContent;
    console.log("handleCloseUserMenu: ", selectMenuItem);
    switch (selectMenuItem) {
      case "Home":
        nav("/");
        break;
      case "Contacts":
        nav("/contacts");
        break;
      case "New contact":
        nav("/new-contact");
        break;

      default:
        break;
    }
  };

  return (
    <>
      <NavLink to="/">Home</NavLink>
      {/*<NavLink to="/tasks">Tasks</NavLink>*/}
      <NavLink to="/contacts">Contacts</NavLink>
      Welcome {userName}
      <button onClick={handleLogout}>Logout</button>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary" enableColorOnDark={true}>
          <Toolbar>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleOpenUserMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settingsAuth.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {selectMenuItem}
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleChangeInput}
              />
            </Search>

            <div>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {userName}
              </Typography>
            </div>

            {/*<NavLink to="/login">*/}
            <div>
              <BottomNavigation
                // sx={{ width: 500 }}
                sx={{ bgcolor: "inherit", color: "white" }}
                // value={value}
                onClick={handleLogout}
              >
                <BottomNavigationAction
                  label="Logout"
                  value="logout"
                  icon={<LogoutIcon sx={{ color: "white" }} />}
                />
              </BottomNavigation>
            </div>
            {/*</NavLink>*/}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

const MenuAppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      {isLoggedIn ? <AuthorizedNav /> : <UnauthorizedNav />}
      <Outlet />
    </Container>
  );
};

export default MenuAppBar;
