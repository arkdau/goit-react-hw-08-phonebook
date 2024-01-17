import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
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
import ContactList from "pages/ContactList/ContactList";
import Tasks from "pages/Tasks/Tasks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
    // eslint-disable-next-line
  }, []);

  const isRefreshing = useSelector(selectIsRefreshing);
  if (isRefreshing) {
    return <div>Refreshing ...</div>;
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {
            /*<Route
            path="register"
            element={<RestrictedRoute component={Register} path="/tasks" />}
          />
          <Route
            path="login"
            element={<RestrictedRoute component={Login} path="/tasks" />}
          />*/
          }
          <Route
            path="register"
            element={<RestrictedRoute component={Register} path="/contacts" />}
          />
          <Route
            path="login"
            element={<RestrictedRoute component={Login} path="/contacts" />}
          />

          {
            /*<Route
            path="tasks"
            element={<PrivatedRoute component={Tasks} path="/login"  />}
          />*/
          }
          <Route
            path="contacts"
            element={<PrivatedRoute component={Tasks} path="/login" />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
