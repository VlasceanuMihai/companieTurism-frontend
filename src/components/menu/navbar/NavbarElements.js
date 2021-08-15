import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: linear-gradient(45deg, #f1cdb9 10%, #b6aeab 90%);
  height: 60px;
  display: flex;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  font-size: 15px;
  display: flex;
  align-items: center;
  padding: 20px;
  height: 100%;
  cursor: pointer;
  color: rgb(0, 0, 0);
  font-weight: bold;
  &.active {
    color: #fff;
  }
  &:hover {
    color: #ffffff;
    text-decoration: none;
    transition: 0.4s ease;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const NavBtnLink = styled(Link)`
  background: #f1cdb9;
  padding: 5px 15px;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  left: 1130px;
  color: #fff;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transition: all 0.6s ease-in-out;
    background: #fff;
    color: #010606;
    text-decoration: none;
  }
`;
