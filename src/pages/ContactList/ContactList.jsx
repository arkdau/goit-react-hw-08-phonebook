import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Contact } from "./../Contact/Contact";
import { fetchContacts } from "./../../redux/contacts/operations";
import styled from "styled-components";
import {
  Table,
  TableHor,
  TableRaw,
  TableRawContent,
  Thead,
  TotalContacts,
} from "./ContactList.Styled";

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

  const handleContactDetailsClick = (contactId) => {
    // navigate(`contact/${contactId}`, { state: stateItem });
  };

  const contactsAmount = contacts.length;

  return (
    <>
      <Table>
        <Thead>
          <TableRaw>
            <TableHor>Name</TableHor>
            <TableHor>Phone Number</TableHor>
          </TableRaw>
        </Thead>
        <TotalContacts>
          <tr>
            <td>CONTACTS ({contactsAmount})</td>
          </tr>
        </TotalContacts>
        <tbody>
          {(visibleContacts || []).map((contact) => {
            return (
              <TableRawContent
                key={contact.id}
                onClick={() => handleContactDetailsClick(contact.id)}
              >
                <Contact contact={contact} />
              </TableRawContent>
            );
          })}
        </tbody>
      </Table>

      <MsgContainer>
        {isLoading ? <div>Loading ...</div> : ""}
        {error ? <div>Error Nerwork ...</div> : ""}
      </MsgContainer>
    </>
  );
}

export default ContactList;
