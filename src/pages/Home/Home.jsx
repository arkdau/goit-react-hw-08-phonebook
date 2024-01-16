import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        {/*<link rel="canonical" href="http://" />*/}
      </Helmet>
      Task manager welcome page
    </div>
  );
};

export default Home;
