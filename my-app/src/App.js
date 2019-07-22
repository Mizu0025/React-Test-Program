import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./home/HomePage";
import FileServerPage from "./fileserver/FileServer";
import ManageFileServerPage from "./fileserver/FileServerManagement";
import ToastPage from "./toast/Toast";
import PageNotFound from "./PageNotFound";
import "./App.css";

function App() {
  debugger;
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/toast" component={ToastPage} />
          <Route path="/fileserver" component={FileServerPage} />
          <Route
            path="/fileservermanagement"
            component={ManageFileServerPage}
          />
          <Route component={PageNotFound} />
        </Switch>
      </Router>{" "}
    </div>
  );
}

export default App;
