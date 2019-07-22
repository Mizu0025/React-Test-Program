import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./home/HomePage";
import FileServerPage from "./fileserver/FileServer";
import ManageFileServerPage from "./fileserver/FileServerManagement";
import ToastPage from "./toast/ToastTest";
import PageNotFound from "./PageNotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/toast" component={ToastPage} />
        <Route path="/fileserver" component={FileServerPage} />
        <Route path="/fileservermanagement" component={ManageFileServerPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
