import ContactList from "./../ContactList/ContactList";

import { Helmet } from "react-helmet";

const Tasks = () => {
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
