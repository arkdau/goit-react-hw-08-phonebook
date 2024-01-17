import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Contact } from "./../Contact/Contact";
import { fetchContacts } from "./../../redux/contacts/operations";
import styled from "styled-components";

const ListContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
// flex-direction: column;
`;

const MsgContainer = styled.div`
display: flex;
justify-content: center;
`;

const getVisibleContacts = (contacts, filtr) => {
  return (
    filtr ? contacts.filter((item) => item.name.includes(filtr.text)) : contacts
  );
};

function ContactList() {
  const { filtr, error, isLoading, isDeleting, isPosting, contacts } =
    useSelector((
      state,
    ) => state.contacts);

  const dispatch = useDispatch();

  const visibleContacts = getVisibleContacts(contacts, filtr);

  useEffect(() => {
    dispatch(fetchContacts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchContacts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleting]);

  useEffect(() => {
    if (!isPosting) {
      dispatch(fetchContacts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPosting]);

  return (
    <>
      <ListContainer>
        <ul>
          {(visibleContacts || []).map((item) => {
            return (
              <li key={item.id}>
                <Contact contact={item} />
              </li>
            );
          })}
        </ul>
      </ListContainer>
      <MsgContainer>
        {isLoading ? <div>Loading ...</div> : ""}
        {error ? <div>Error Nerwork ...</div> : ""}
      </MsgContainer>
    </>
  );
}

export default ContactList;
