import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding-top: 40px;
  font-size: 12px;

  h2 {
    margin-bottom: 20px;
    color: ${props => props.theme.colors.addContact.text};
  }

  @media screen and (min-width: ${props => props.theme.media.m}) {
    font-size: 14px;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  gap: 70px;

  @media screen and (min-width: ${props => props.theme.media.m}) {
    gap: 135px;
  }
`;

export const BackBtn = styled(Link)`
  color: ${props => props.theme.colors.header.text};
  transition: color 250ms ease-in-out;

  &:hover {
    color: #47a76a;
  }

  &:active {
    color: #47a76a;
  }
`;


// import styled from 'styled-components';
// import { Form } from 'formik';
//
// export const StyledForm = styled(Form)`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   padding: 10px;
//   align-items: center;
//
//   div {
//     width: 100%;
//   }
//
//   svg {
//     width: 28px;
//     height: 28px;
//   }
//
//   @media screen and (min-width: ${props => props.theme.media.m}) {
//     div > div {
//       width: 300px;
//     }
//
//     svg {
//       width: 36px;
//       height: 36px;
//     }
//   }
// `;
//
// export const Wrapper = styled.div`
//   width: 100%;
//   font-weight: 500;
//   padding: 10px;
//
//   @media screen and (min-width: ${props => props.theme.media.m}) {
//     width: 500px;
//   }
// `;
//
// export const InputWrapper = styled.div`
//   display: flex;
//   align-items: end;
//   gap: 10px;
// `;
//
// export const Button = styled.button`
//   padding: 12px;
//   align-self: flex-start;
//   margin-left: 55px;
//   margin-top: 15px;
//   min-width: 105px;
//   background-color: rgb(102, 102, 102);
//   color: #fff;
//   border-radius: 4px;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   transition: box-shadow 250ms ease-in-out, opacity 250ms ease-in-out;
//
//   &:hover {
//     box-shadow: -1px 0px 8px -2px ${props => props.theme.colors.btns.shadow};
//     opacity: 0.9;
//   }
//
//   &:active {
//     box-shadow: -1px 0px 8px -2px ${props => props.theme.colors.btns.shadow};
//     opacity: 0.9;
//   }
// `;
//
