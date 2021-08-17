import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: linear-gradient(45deg, #f1cdb9 10%, #b6aeab 90%);
  height: 50px;
  top: 0px;
  position: fixed;
  z-index: 1;
  width: 100%;
  
`;

export const NavLink = styled(Link)`
color: black;
position: relative;
top: 12.5px;
text-decoration: none;
font-size: 14px;
margin-left: 50px;
font-weight: bold;
background-color: transparent;
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
 width: 600px;
`;

export const NavBtn = styled.nav`
width: 100%;
height: 50px;
float: right;
position: relative;
top: -50px;
z-index: -1;
`;

export const NavBtnLink = styled(Link)`
  background: #f1cdb9;
  position: relative;
  top: 8.5px;
  display: inline;
  float: right;
  margin-right: 20px;
  padding: 5px 15px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    transition: all 0.6s ease-in-out;
    background: #fff;
    color: #010606;
    text-decoration: none;
  }
`;
