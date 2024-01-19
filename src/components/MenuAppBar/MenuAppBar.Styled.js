import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;
  padding-bottom: 32px;
  height: 100vh;

  @media screen and (min-width: ${props => props.theme.media.m}) {
    min-width: 746px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
  }

  @media screen and (min-width: ${props => props.theme.media.l}) {
    width: 1200px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 15px;
  }
`;
