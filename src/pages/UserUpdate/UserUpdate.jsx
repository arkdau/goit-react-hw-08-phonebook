import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import "./Register.module.css";

const Register = () => {
  const dispatch = useDispatch();
  const handleUpdate = (event) => {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    dispatch(register({
      name,
      email,
      password,
    }));
  };

  return (
    <div>
      <Helmet>
        <title>User Update</title>
        {/*<link rel="canonical" href="http://" />*/}
      </Helmet>

      <form onSubmit={handleUpdate}>
        <label>Username</label>
        <input name="username" />

        <label>Email</label>
        <input name="email" type="email" />

        <label>Password</label>
        <input name="password" type="password" autoComplete="off" />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Register;
