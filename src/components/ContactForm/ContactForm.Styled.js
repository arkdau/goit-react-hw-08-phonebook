import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  align-items: center;

  div {
    width: 100%;
  }

  @media screen and (min-width: ${props => props.theme.media.m}) {
    div > div {
      width: 300px;
    }

    svg {
      width: 36px;
      height: 36px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  font-weight: 500;
  padding: 10px;

  @media screen and (min-width: ${props => props.theme.media.m}) {
    width: 500px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;
`;

export const Button = styled.button`
  display: block;
  padding: 8px;
  min-width: 50px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: ${props => props.theme.colors.addContact.icon};
  cursor: pointer;

  svg {
    transition: transform 250ms ease-in-out, color 250ms ease-in-out;
    width: 40px;
    height: 40px;
    &:hover {
      color: ${props => props.theme.colors.addContact.hover};

      transform: scale(1.08);
    }

    &:active {
      color: ${props => props.theme.colors.addContact.hover};
      transform: scale(1.08);
    }
  }

  @media screen and (min-width: ${props => props.theme.media.m}) {
    margin-left: 160px;
  }
`;

