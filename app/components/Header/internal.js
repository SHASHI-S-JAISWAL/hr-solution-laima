import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const HeaderComp = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  background-image: linear-gradient(to right, #ffa500, #ff8c00);
`;

export const HeaderImg = styled.img`
  margin: 20px;
  height: 70px;
  width: auto;
`;

export const MenuWrapper = styled.div`
  /* position: absolute; */
  bottom: 40;
  width: 100%;
  left: 0;
  display: flex;
  flex: 1;
  overflow-x: auto;
  /* overflow-y: hidden; */
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 40px;
  background-image: linear-gradient(
    to top,
    rgba(1, 0, 0, 0),
    rgba(1, 0, 0, 0.7)
  );
`;

export const LinkTile = styled(Link)`
  font-weight: 700;
  color: #1a1a1a;
  // padding: 10px 20px;
  text-decoration: none;
`;
export const MenuLink = styled(Link)`
  font-weight: 700;
  color: #fff;
  // padding: 10px 20px;
  text-decoration: none;
  white-space: nowrap;
`;

export const MenuTile = styled.div`
  font-weight: 700;
  color: #fff;
  padding: 10px 20px;
  white-space: nowrap;
`;
