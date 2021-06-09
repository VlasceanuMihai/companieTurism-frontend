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
            <AuthenticatedRoute
              path="/admin/home"
              exact
              component={HomeComponent}
            />
            <AuthenticatedRoute
              path="/admin/employees"
              exact
              component={EmployeesComponent}
            />
            <AuthenticatedRoute
              path="/admin/documents"
              exact
              component={DocumentsComponent}
            />
            <AuthenticatedRoute
              path="/admin/flights"
              exact
              component={FlightsComponent}
            />
            <AuthenticatedRoute
              path="/admin/hotels"
              exact
              component={HotelsComponent}
            />
          </Switch>
        </Route>
      </Switch>
      {/* <FooterComponent></FooterComponent> */}
    </div>
  );
});

export default App;

// return (
//   <div className="App">
//     <Switch>
//       {/* TODO: De adaugat /404 -> ErrorComponent */}
//       <Route>
//         {location.pathname !== `/login` &&
//           location.pathname !== `/signin` &&
//           location.pathname !== `/`}
//         <Switch>
//           <Route
//             path={["/login", "/signin", "/"]}
//             exact
//             component={LoginComponent}
//           />
//           {/* TODO: Aici vin toate AuthenticatedRoute */}
//           <AuthenticatedRoute
//             path="/admin/employees"
//             exact
//             component={EmployeesComponent}
//           />
//         </Switch>
//       </Route>
//     </Switch>
//   </div>
// );
