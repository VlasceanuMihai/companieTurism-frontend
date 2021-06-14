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
        <Link to="/admin/employees">Angajati</Link>
        <Link to="/admin/documents">Documente</Link>
        <Link to="/admin/flights">Zboruri</Link>
        <Link to="/admin/hotels">Hoteluri</Link>
        <Link to="/admin/hotels" id="userIcon" target="_blank">
          <i class="far fa-user-circle"></i>
        </Link>
        <Link to="/admin/hotels" class="logout" onClick={handleLogout}>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default NavbarComponent;
