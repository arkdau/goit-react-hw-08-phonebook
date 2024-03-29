import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
// import Tasks from "./pages/Tasks/Tasks";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current } from "./redux/auth/operations";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import Register from "./pages/Register/Register";
import { PrivatedRoute } from "./components/PrivateRoute/PrivatedRoute";
import { selectIsRefreshing } from "./redux/auth/selectors";
// import ContactList from "pages/ContactList/ContactList";
import Tasks from "pages/Tasks/Tasks";
import UserMenu from "components/MenuAppBar/MenuAppBar";
import NewContact from "./pages/AddContacts/AddContacts";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "components/styleTheme/theme";
import ContactEdit from "pages/ContactEdit/ContactEdit";

function App() {
  const dispatch = useDispatch();
  // const { contacts } = useSelector((state) => state.contacts);
  // const userTheme = useSelector(selectTheme);
  const userTheme = "light";

  useEffect(() => {
    dispatch(current());
    // eslint-disable-next-line
  }, []);

  const isRefreshing = useSelector(selectIsRefreshing);
  if (isRefreshing) {
    return <div>Refreshing ...</div>;
  }
  return (
    <ThemeProvider theme={userTheme === "dark" ? darkTheme : lightTheme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserMenu />}>
            {/*}<Route index element={<Home />} />*/}
            <Route
              index
              element={<RestrictedRoute component={Home} path="/contacts" />}
            />

            <Route
              path="register"
              element={
                <RestrictedRoute component={Register} path="/contacts" />
              }
            />
            <Route
              path="login"
              element={<RestrictedRoute component={Login} path="/contacts" />}
            />

            <Route
              path="contacts/:id"
              element={
                <PrivatedRoute
                  component={ContactEdit}
                />
              }
            >
            </Route>

            <Route
              path="contacts"
              element={<PrivatedRoute component={Tasks} path="/login" />}
            />
            <Route
              path="new-contact"
              element={
                <PrivatedRoute component={NewContact} path="/new-contact" />
              }
            />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
