import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './common/Header';
import HomePage from './home/HomePage';
import FileServer from './demonstrations/FileServer';
import ManageFileServer from './demonstrations/FileServerManagement';
import Toast from './demonstrations/ToastTest';
import PageNotFound from './PageNotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/toast" component={Toast} />
        <Route path="/fileserver" component={FileServer} />
        <Route path="/fileservermanagement" component={ManageFileServer} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
