// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import { selectIsLoggedIn } from "../../redux/selectors";

import { Helmet } from "react-helmet";

const Tasks = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // if (!isLoggedIn) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div>
      <Helmet>
        <title>Tasks</title>
        {/*<link rel="canonical" href="http://" />*/}
      </Helmet>
      Tasks
    </div>
  );
};

export default Tasks;
