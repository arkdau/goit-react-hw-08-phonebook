import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import "./Register.module.css";

const Register = () => {
  const dispatch = useDispatch();
  const handleRegistration = (event) => {
    event.preventDefault();
    // const target = event.target;
    // const currentTarget = event.currentTarget;
    const name = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // console.log("register-tareget: ", target);
    // console.log("register-CurrTareget: ", currentTarget);

       dispatch(register({
        name,
        email,
        password,
      }));
  };

  return (
    <div>
      <Helmet>
        <title>Register</title>
        {/*<link rel="canonical" href="http://" />*/}
      </Helmet>

      <form onSubmit={handleRegistration}>
        <label>Username</label>
        <input name="username" />

        <label>Email</label>
        <input name="email" type="email" />

        <label>Password</label>
        <input name="password" type="password" autoComplete="off" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;