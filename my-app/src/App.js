import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import ToastPage from "./toast/Toast";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import FileServerPage from "./fileserver/FileServer";
import ManageFileServerPage from "./fileserver/FileServerManagement";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer> autoClose={3000} hideProgressBar</ToastContainer>
    </div>
  );
}

export default App;
