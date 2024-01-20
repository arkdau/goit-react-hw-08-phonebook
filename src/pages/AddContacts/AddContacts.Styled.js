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

