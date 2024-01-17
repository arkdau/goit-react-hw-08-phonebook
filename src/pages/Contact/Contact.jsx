import { useDispatch } from "react-redux";
import { fetchDelContacts } from "./../../redux/contacts/operations";
import styled from "styled-components";

const ItemContainer = styled.div`
display: flex;
align-items: center;
`;

const Content = styled.p`
padding-left: 20px;
padding-right: 20px;
width: 200px;
`;


const Span = styled.span`
display: flex;
`;

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(fetchDelContacts(contact.id));

  return (
    <ItemContainer>
      <Content>
        {contact.name}, <Span>tel.: {contact.number}</Span>
      </Content>
      <button
        type="button"
        onClick={handleDelete}
      >
        Remove
      </button>
    </ItemContainer>
  );
};
