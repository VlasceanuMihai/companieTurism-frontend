import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import AuthenticatedRoute from "./auth/AuthenticatedRoute";
import LoginComponent from "./components/login/LoginComponent";
import EmployeesComponent from "./components/menu/employees/EmployeesComponent";

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
              path="/admin/employees"
              exact
              component={EmployeesComponent}
            />
          </Switch>
        </Route>
      </Switch>
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
