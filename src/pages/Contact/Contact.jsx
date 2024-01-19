import { useDispatch } from "react-redux";
import { fetchDelContacts } from "./../../redux/contacts/operations";
import styled from "styled-components";

// import {
//   Avatar,
//   AvatarWrapper,
//   BackBtn,
//   BtnWrapper,
//   EditBtnWrapper,
//   EditButton,
//   Name,
//   RemoveBtnWrapper,
//   RemoveButton,
//   TopContent,
// } from "./Contact.Styled";
// import { TbArrowBackUp } from 'react-icons/tb';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import {
  ButtonsWrapper,
  DeleteBtn,
  EditBtn,
  Name,
  Table,
  TableDataName,
  TableDataNumber,
  TableHor,
  TableRaw,
  TableRawContent,
  Thead,
  TotalContacts,
} from "./Contact.Styled";
import Avatar from "@mui/material/Avatar";

import { Suspense, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Loader } from "components/Loader/Loader";

// const ItemContainer = styled.div`
// display: flex;
// align-items: center;
// `;

// const Content = styled.p`
// padding-left: 20px;
// padding-right: 20px;
// width: 200px;
// `;

// const Span = styled.span`
// display: flex;
// `;

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? "/");


  // const handleDelete = () => dispatch(fetchDelContacts(contact.id));

  const handleDelete = () => {
    const isConfirmed = window.confirm("Delete contact?");

    if (isConfirmed) {
      dispatch(fetchDelContacts(contact.id));
      navigate("/");
    }
  };

  function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }






  // const handleContactEdit = () => {
  //   navigate(`edit`, { state: { from: location } });
  // };

  const firstLetter = contact.name.slice(0, 1).toUpperCase();
  const contactName = contact.name.charAt(0).toUpperCase();
  const contactSliced = contact.name.slice(1);
  const ContactNameCapital = contactName + contactSliced;

  return (
    <>
      {/*<ItemContainer>
        <Content>
          {contact.name}, <Span>tel.: {contact.number}</Span>
        </Content>
        <button
          type="button"
          onClick={handleDelete}
        >
          Remove
        </button>
      </ItemContainer>*/}

      {/*<Table>
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
          <TableRawContent
            key={contact.id}
            onClick={() => handleContactDetailsClick(contact.id)}
          >*/}
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
                  navigate(`contact/${contact.id}/edit`);
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
                    console.log("dispatch(removeContact(contact.id));");
                  }
                }}
              >
                <MdDelete size={25} />
              </DeleteBtn>
            </ButtonsWrapper>
          {/*</TableRawContent>
        </tbody>
      </Table>*/}

      {
        /*<TopContent>
        <AvatarWrapper>
          <Avatar>
            <BackBtn to={backLinkLocation.current}>
              <TbArrowBackUp size={"30px"} />
            </BackBtn>

            <AccountCircleIcon sx={{ fontSize: "210px", color: "#7E57C2" }} />
          </Avatar>
          <div>
            <Name>{contact.name}</Name>
          </div>
        </AvatarWrapper>

        <BtnWrapper>
          <EditBtnWrapper type="button" onClick={() => handleContactEdit()}>
            <EditButton>Edit</EditButton>
          </EditBtnWrapper>

          <RemoveBtnWrapper>
            <RemoveButton typeof="button" onClick={handleDelete}>
              Delete
            </RemoveButton>
          </RemoveBtnWrapper>
        </BtnWrapper>
      </TopContent>
      <hr style={{ marginTop: "20px", marginBottom: "40px" }} />

      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>*/
      }
    </>
  );
};
