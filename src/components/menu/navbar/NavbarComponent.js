import './NavbarComponent.css';
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import travel from '../../../media/travelNew.png';
import AuthenticationService from '../../../auth/AuthenticationService';
import { makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  travelImg: {
    width: '50px',
    marginLeft: '20px',
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
        <Link to="/home" >
        <img
          className={classes.travelImg}
          src={travel}
          alt="Travel Company"
        />
        </Link>
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
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin" onClick={handleLogout}>
            Logout
          </NavBtnLink>
          <NavBtnLink to="/profile">
            {}<i className={classes.profileIcon} class="fas fa-user-circle"></i>
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
