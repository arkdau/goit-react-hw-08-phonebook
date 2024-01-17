import styled from "styled-components";
import ContactForm from "./../ContactForm/ContactForm";
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

      <div
        style={{
          minHeight: "200px",
          margin: "30px auto",
          boxSizing: "border-box",
          backgroundColor: "lightblue",
          padding: "10px",
        }}
      >
        <Header>
          <h2>Phonebook</h2>
        </Header>
        <ContactForm />

        <Header>
          <h2>Contacts</h2>
        </Header>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Tasks;
