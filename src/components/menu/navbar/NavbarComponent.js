import "./NavbarComponent.css";
import AuthenticationService from "../../../auth/AuthenticationService";

function NavbarComponent() {
  const { logout } = AuthenticationService();

  async function handleLogout() {
    logout();
  }

  return (
    <div class="navBar">
      <div class="header-left">
        <a href="/home">Home</a>
        <a href="/admin/employees">Angajati</a>
        <a href="/admin/documents">Documente</a>
        <a href="/admin/flights">Zboruri</a>
        <a href="/admin/hotels">Hoteluri</a>
        <a id="userIcon" href="" target="_blank">
          <i class="far fa-user-circle"></i>
        </a>
        <a class="logout" href="/login" onClick={handleLogout}>
          Log out
        </a>
      </div>
    </div>
  );
}

export default NavbarComponent;
