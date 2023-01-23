import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const PageWrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  flex-direction: column;
`;

export const PageTitle = styled(Typography)`
  display: block;
  color: orange;
  align-self: center;
  padding-top: 40px;
  text-align: center;
`;

export const PageParagraph = styled(Typography)`
  display: block;
  align-self: center;
  color: #1a1a1a;
  padding: 15px;
  max-width: 900px;
`;

export const LogoImg = styled.img`
  margin: 20px;
  height: 80px;
  width: 120px;
  align-self: center;
`;
