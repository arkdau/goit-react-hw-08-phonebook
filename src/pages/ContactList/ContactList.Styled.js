import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
`;

export const Thead = styled.thead`
  width: 100px;
  border-bottom-width: 1px;
  position: sticky;
  top: 4rem;
  z-index: 10;
  background-color: rgba(255, 255, 255, 1);
  font-size: 18px;
`;

export const TableRaw = styled.tr`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const TableHor = styled.th`
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid ${props => props.theme.colors.contactsList.border};
  font-weight: 400;
  font-size: 16px;
  background-color: ${props => props.theme.colors.contactsList.bg};
  color: ${props => props.theme.colors.header.text};

  @media screen and (min-width: ${props => props.theme.media.m}) {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const TotalContacts = styled.thead`
  padding-top: 14px;
  padding-bottom: 14px;
  font-size: 14px;

  td {
    padding-top: 14px;
    padding-bottom: 14px;
    font-weight: 500;
    color: ${props => props.theme.colors.header.text};
  }
`;

export const TableRawContent = styled.tr`
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.contactsList.hover};
  }

  @media screen and (min-width: ${props => props.theme.media.m}) {
    &:hover {
      .ButtonsWrapper {
        display: block;
      }
    }
  }
`;

// export const TableDataName = styled.td`
//   padding: 1px 10px;
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   font-size: 18px;
//
//   @media screen and (min-width: ${props => props.theme.media.m}) {
//     padding: 1px 16px;
//   }
// `;

// export const Name = styled.span`
//   padding-top: 20px;
//   padding-bottom: 20px;
//   line-height: 24px;
//   font-size: 16px;
//   color: ${props => props.theme.colors.header.text};
//
//   @media screen and (min-width: ${props => props.theme.media.m}) {
//     font-size: 18px;
//   }
// `;

// export const TableDataNumber = styled.td`
//   padding: 1px 10px;
//   font-size: 18px;
//   line-height: 24px;
//   font-size: 14px;
//   color: ${props => props.theme.colors.header.text};
//
//   @media screen and (min-width: ${props => props.theme.media.m}) {
//     font-size: 18px;
//     padding: 1px 16px;
//   }
// `;

// ====
// export const ButtonsWrapper = styled.td`
//   display: none;
//   position: absolute;
//   top: 14px;
//   right: 8px;
// `;

// export const EditBtn = styled.button`
//   padding: 4px 6px;
//   background: transparent;
//   margin-right: 10px;
//   border: none;
//   color: ${state => state.theme.colors.contactsList.hoveredBtnColor};
//   cursor: pointer;
//
//   &:hover {
//     color: rgba(0, 0, 0, 1);
//   }
// `;

// export const DeleteBtn = styled.button`
//   padding: 4px 6px;
//   background: transparent;
//   border: none;
//   color: ${state => state.theme.colors.contactsList.hoveredBtnColor};
//   cursor: pointer;
//
//   &:hover {
//     color: rgba(0, 0, 0, 1);
//   }
// `;


///////////////////////////////////////////


// import styled from "styled-components";
// import { Link } from "react-router-dom";
//
// export const TopContent = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
//   padding-top: 30px;
//
//   @media screen and (min-width: ${(props) => props.theme.media.m}) {
//     flex-direction: row;
//   }
// `;
//
// export const BackBtn = styled(Link)`
//   color: ${(props) => props.theme.colors.header.text};
//   transition: color 250ms ease-in-out;
//
//   &:hover {
//     color: #47a76a;
//   }
//
//   &:active {
//     color: #47a76a;
//   }
// `;
//
// export const AvatarWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   flex-direction: column;
//
//   @media screen and (min-width: ${(props) => props.theme.media.m}) {
//     flex-direction: row;
//     gap: 25px;
//   }
// `;
//
// export const Avatar = styled.div`
//   display: flex;
//   gap: 20px;
//   margin-right: 40px;
//
//   @media screen and (min-width: ${(props) => props.theme.media.m}) {
//     gap: 15px;
//     margin-right: 0px;
//   }
// `;
//
// export const Name = styled.h2`
//   font-size: 24px;
//   margin-bottom: 12px;
//   color: ${(props) => props.theme.colors.header.text};
//
//   @media screen and (min-width: ${(props) => props.theme.media.m}) {
//     font-size: 32px;
//     margin-bottom: 0;
//   }
// `;
//
// export const BtnWrapper = styled.div`
//   display: flex;
//   gap: 20px;
//   justify-content: center;
// `;
//
// export const EditBtnWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: flex-end;
// `;
//
// export const RemoveBtnWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: flex-end;
// `;
//
// export const EditButton = styled.button`
//   min-width: 100px;
//   text-align: center;
//   background-color: rgba(26, 115, 232, 1);
//   border-radius: 4px;
//   padding: 12px 16px;
//   color: #fff;
//   cursor: pointer;
//   border: none;
//   transition: box-shadow 250ms ease-in-out, opacity 250ms ease-in-out;
//
//   &:hover {
//     box-shadow: -1px 0px 8px -2px ${(props) => props.theme.colors.btns.shadow};
//     opacity: 0.9;
//   }
//
//   &:active {
//     box-shadow: -1px 0px 8px -2px ${(props) => props.theme.colors.btns.shadow};
//     opacity: 0.9;
//   }
// `;
//
// export const RemoveButton = styled.button`
//   min-width: 120px;
//   text-align: center;
//   background-color: rgba(212, 66, 53, 1);
//   border-radius: 4px;
//   padding: 12px 16px;
//   color: #fff;
//   cursor: pointer;
//   border: none;
//   transition: box-shadow 250ms ease-in-out, opacity 250ms ease-in-out;
//
//   &:hover {
//     box-shadow: -1px 0px 8px -2px ${(props) => props.theme.colors.btns.shadow};
//     opacity: 0.9;
//   }
//
//   &:active {
//     box-shadow: -1px 0px 8px -2px ${(props) => props.theme.colors.btns.shadow};
//     opacity: 0.9;
//   }
// `;
//
// // ===========
