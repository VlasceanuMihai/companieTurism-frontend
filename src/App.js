import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import AuthenticatedRoute from "./auth/AuthenticatedRoute";
import LoginComponent from "./components/login/LoginComponent";
import EmployeesComponent from "./components/menu/employees/EmployeesComponent";
import TableComponent from "./components/menu/table/TableComponent"
// import AuthenticatedRoute from "./auth/AuthenticatedRoute";

const App = withRouter(({ location }) => {
  return (
    <div className="App">
      <Route path="/login" exact component={LoginComponent} />
      <Route path="/signin" exact component={LoginComponent} />
      <Route path="/" exact component={LoginComponent} />
      <Route path="/table" exact component={TableComponent} />
      <Route
        path="/admin/employees"
        exact
        component={EmployeesComponent}
      />
    </div>
  );
  // return <LoginComponent />;
});

export default App;

// <Switch>
//         {/* TODO: De adaugat /404 -> ErrorComponent */}
//         <Route>
//           {location.pathname !== `/login` &&
//             location.pathname !== `/signin` &&
//             location.pathname !== `/` &&
//             location.pathname}
//           <Switch>
//             <Route path="/login" exact component={LoginComponent} />
//             <Route path="/signin" exact component={LoginComponent} />
//             <Route path="/" exact component={LoginComponent} />
//             {/* TODO: Aici vin toate AuthenticatedRoute */}
//             <AuthenticatedRoute
//               path="/admin/employees"
//               exact
//               component={EmployeesComponent}
//             />
//           </Switch>
//         </Route>
//       </Switch>
