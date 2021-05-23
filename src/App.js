import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import LoginComponent from "./components/login/LoginComponent";
// import AuthenticatedRoute from "./auth/AuthenticatedRoute";

const App = withRouter(({ location }) => {
  return (
    <div className="App">
      <Switch>
        {/* TODO: De adaugat /404 -> ErrorComponent */}
        <Route>
          {location.pathname !== `/login` &&
            location.pathname !== `/signin` &&
            location.pathname !== `/` &&
            location.pathname}
          <Switch>
            <Route path="/login" exact component={LoginComponent} />
            <Route path="/signin" exact component={LoginComponent} />
            <Route path="/" exact component={LoginComponent} />
            {/* TODO: Aici vin AuthenticatedRoute */}
          </Switch>
        </Route>
      </Switch>
    </div>
  );
  // return <LoginComponent />;
});

export default App;
