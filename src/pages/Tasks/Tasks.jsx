import styled from "styled-components";
// import ContactForm from "./../ContactForm/ContactForm";
import ContactList from "./../ContactList/ContactList";
import Filter from "./../Filter/Filter";

import { Helmet } from "react-helmet";

const Header = styled.div`
display: flex;
justify-content: center;
align-items: center
`;

const Tasks = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // if (!isLoggedIn) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div>
      <Helmet>
        <title>Contacts</title>
        {/*<link rel="canonical" href="http://" />*/}
      </Helmet>

      <ContactList />
    </div>
  );
};

export default Tasks;
