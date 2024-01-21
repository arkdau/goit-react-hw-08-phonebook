import { useDispatch } from "react-redux";
import { fetchDelContacts } from "./../../redux/contacts/operations";

import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import {
  ButtonsWrapper,
  DeleteBtn,
  EditBtn,
  Name,
  TableDataName,
  TableDataNumber,
} from "./Contact.Styled";
import Avatar from "@mui/material/Avatar";

import { useNavigate } from "react-router-dom";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => dispatch(fetchDelContacts(contact.id));
  function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const firstLetter = contact.name.slice(0, 1).toUpperCase();
  const contactName = contact.name.charAt(0).toUpperCase();
  const contactSliced = contact.name.slice(1);
  const ContactNameCapital = contactName + contactSliced;

  return (
    <>
      <TableDataName>
        <Avatar
          sx={{
            bgcolor: getRandomHexColor(),
            width: 40,
            height: 40,
          }}
        >
          {firstLetter}
        </Avatar>
        <Name>{ContactNameCapital}</Name>
      </TableDataName>

      <TableDataNumber>{contact.number}</TableDataNumber>

      <ButtonsWrapper className="ButtonsWrapper">
        <EditBtn
          onClick={(e) => {
            e.stopPropagation();
            navigate(`${contact.id}`);
          }}
        >
          <FiEdit size={25} />
        </EditBtn>
        <DeleteBtn
          onClick={(e) => {
            e.stopPropagation();

            const isConfirmed = window.confirm("Delete contact?");
            if (isConfirmed) {
              // dispatch(removeContact(contact.id));
              handleDelete();
            }
          }}
        >
          <MdDelete size={25} />
        </DeleteBtn>
      </ButtonsWrapper>
    </>
  );
};
