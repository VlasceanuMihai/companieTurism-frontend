import './NavbarComponent.css';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import travel from '../../../media/travelNew.png';
import AuthenticationService from '../../../auth/AuthenticationService';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  travelImg: {
    width: '70%',
  },
});
function NavbarComponent() {
  const classes = useStyles();
  const { logout } = AuthenticationService();

  async function handleLogout() {
    logout();
  }

  return (
    <>
      <Nav className="nav">
        <NavLink to="/home">
          <img
            className={classes.travelImg}
            src={travel}
            alt="Travel Company"
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Acasa
          </NavLink>
          <NavLink to="/employees" activeStyle>
            Angajati
          </NavLink>
          <NavLink to="/documents" activeStyle>
            Documente
          </NavLink>
          <NavLink to="/flights" activeStyle>
            Zboruri
          </NavLink>
          <NavLink to="/hotels" activeStyle>
            Hoteluri
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/profile">
            <i className={classes.profileIcon} class="fas fa-user-circle"></i>
          </NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/signin" onClick={handleLogout}>
            Logout
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
    // <div class="navBar">
    //   <div class="header-left">
    //     <Link to="/home">Home</Link>
    //     <Link to="/employees">Angajati</Link>
    //     <Link to="/documents">Documente</Link>
    //     <Link to="/flights">Zboruri</Link>
    //     <Link to="/hotels">Hoteluri</Link>
    //     <Link to="/profile">
    //     </Link>
    //     <Link to="/login" onClick={handleLogout}>
    //       Logout
    //     </Link>
    //     <Link to="/profile">
    //       Profile
    //     </Link>
    //   </div>
    // </div>
  );
}

export default NavbarComponent;
