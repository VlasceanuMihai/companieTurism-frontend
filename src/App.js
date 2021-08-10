import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import AuthenticatedRoute from "./auth/AuthenticatedRoute";
import LoginComponent from "./components/login/LoginComponent";
import EmployeesComponent from "./components/menu/employees/EmployeesComponent";
import DocumentsComponent from "./components/menu/documents/DocumentsComponent";
import HomeComponent from "./components/menu/home/HomeComponent";
import FlightsComponent from "./components/menu/flights/FlightsComponent";
import HotelsComponent from "./components/menu/hotels/HotelsComponent";
import RegistrationEmployeeComponent from "./components/menu/employees/RegistrationEmployeeComponent";
import RegistrationDocumentComponent from "./components/menu/documents/RegistrationDocumentComponent";
import RegistrationFlightComponent from "./components/menu/flights/RegistrationFlightComponent";
import RegistrationHotelComponent from "./components/menu/hotels/RegistrationHotelComponent";
import RegistrationAccommodationPackageComponent from "./components/menu/hotels/accommodationPackages/RegistrationAccommodationPackageComponent";
import AccommodationPackagesComponent from "./components/menu/hotels/accommodationPackages/AccommodationPackagesComponent";

const App = withRouter(({ location }) => {
  return (
    <div className="App">
      <Switch>
        {/* TODO: De adaugat /404 -> ErrorComponent */}
        <Route>
          {location.pathname !== `/login` &&
            location.pathname !== `/signin` &&
            location.pathname !== `/`}
          <Switch>
            <Route
              path={["/login", "/signin", "/"]}
              exact
              component={LoginComponent}
            />
            {/* TODO: Aici vin toate AuthenticatedRoute */}
            <AuthenticatedRoute path="/home" exact component={HomeComponent} />
            <AuthenticatedRoute
              path="/employees"
              exact
              component={EmployeesComponent}
            />
            <AuthenticatedRoute
              path={"/admin/employees/form"}
              exact
              component={RegistrationEmployeeComponent}
            />
            <AuthenticatedRoute
              path={"/admin/employee/:id"}
              exact
              component={RegistrationEmployeeComponent}
            />
            <AuthenticatedRoute
              path="/documents"
              exact
              component={DocumentsComponent}
            />
            <AuthenticatedRoute
              path={"/admin/documents/form"}
              exact
              component={RegistrationDocumentComponent}
            />
            <AuthenticatedRoute
              path={"/admin/document/:id"}
              exact
              component={RegistrationDocumentComponent}
            />
            <AuthenticatedRoute
              path="/flights"
              exact
              component={FlightsComponent}
            />
            <AuthenticatedRoute
              path="/admin/flights/form"
              exact
              component={RegistrationFlightComponent}
            />
            <AuthenticatedRoute
              path="/admin/flight/:id"
              exact
              component={RegistrationFlightComponent}
            />
            <AuthenticatedRoute
              path="/hotels"
              exact
              component={HotelsComponent}
            />
            <AuthenticatedRoute
              path="/admin/hotel/form"
              exact
              component={RegistrationHotelComponent}
            />
            <AuthenticatedRoute
              path="/admin/hotel/form/:id"
              exact
              component={RegistrationHotelComponent}
            />
            <AuthenticatedRoute
              path="/admin/accommodationPackages/hotel/:id"
              exact
              component={AccommodationPackagesComponent}
            />
            <AuthenticatedRoute
              path="/admin/accommodationPackage/hotel/:id/form"
              exact
              component={RegistrationAccommodationPackageComponent}
            />
            <AuthenticatedRoute
              path="/admin/accommodationPackage/form/:id"
              exact
              component={RegistrationAccommodationPackageComponent}
            />
          </Switch>
        </Route>
      </Switch>
      {/* <FooterComponent></FooterComponent> */}
    </div>
  );
});

export default App;

// <Route
//               path={"/admin/home"}
//               exact
//               component={HomeComponent}
//             />
//             <Route
//               path={"/admin/employees"}
//               exact
//               component={EmployeesComponent}
//             />
//             <Route
//               path={"/admin/documents"}
//               exact
//               component={DocumentsComponent}
//             />
//             <Route
//               path={"/admin/flights"}
//               exact
//               component={FlightsComponent}
//             />
//             <Route
//               path={"/admin/hotels"}
//               exact
//               component={HotelsComponent}
//             />
