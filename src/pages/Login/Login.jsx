import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { login } from "../../redux/operations";

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    dispatch(login({
      email,
      password,
    }));
  };

  return (
    <div>
      <Helmet>
  <title>Login</title>
  {/*<link rel="canonical" href="http://" />*/}
</Helmet>

      <form onSubmit={handleLogin}>
        {
          /*}<label>Username</label>
        <input name="username" />*/
        }

        <label>Email</label>
        <input name="email" type="email" />

        <label>Password</label>
        <input name="password" type="password" autoComplete="off" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
