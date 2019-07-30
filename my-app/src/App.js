import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import ToastPage from "./toast/Toast";
import Header from "./common/Header";
import PageNotFound from "./errors/404PageNotFound";
import AccountsServerPage from "./userDetails/usersDetailsPage";
import ManageUsersDetailsPage from "./userDetails/usersDetailsFormManagement";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/toast" component={ToastPage} />
        <Route path="/accountsServer" component={AccountsServerPage} />
        <Route
          path="/accountManagement/:slug"
          component={ManageUsersDetailsPage}
        />
        <Route path="/accountManagement" component={ManageUsersDetailsPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer> autoClose={3000} hideProgressBar</ToastContainer>
    </div>
  );
}

export default App;
