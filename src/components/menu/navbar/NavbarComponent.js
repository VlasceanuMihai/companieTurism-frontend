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
        <a href="">Home</a>
        <a href="/admin/employees">Angajati</a>
        <a href="">Documente</a>
        <a href="">Zboruri</a>
        <a href="">Hoteluri</a>
        <a id="userIcon" href="" target="_blank">
          <i class="far fa-user-circle"></i>
        </a>
        <a class="logout" href="" onClick={handleLogout}>
          Log out
        </a>
      </div>
    </div>
  );
}

export default NavbarComponent;
