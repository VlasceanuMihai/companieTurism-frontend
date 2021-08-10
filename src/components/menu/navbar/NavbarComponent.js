import "./NavbarComponent.css";
import { Link } from "react-router-dom";
import AuthenticationService from "../../../auth/AuthenticationService";

function NavbarComponent() {
  const { logout } = AuthenticationService();

  async function handleLogout() {
    logout();
  }

  return (
    <div class="navBar">
      <div class="header-left">
        <Link to="/home">Home</Link>
        <Link to="/employees">Angajati</Link>
        <Link to="/documents">Documente</Link>
        <Link to="/flights">Zboruri</Link>
        <Link to="/hotels">Hoteluri</Link>
        <Link to="/profile" id="userIcon" target="_blank">
          <i class="far fa-user-circle"></i>
        </Link>
        <Link to="/login" class="logout" onClick={handleLogout}>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default NavbarComponent;
