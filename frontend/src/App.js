import React from "react";
import "./App.css";

import TopBar from "./components/Navbar/TopBar";
import Home from "./components/Home/Home";
import Maps from "./components/Maps/Maps";
import Profile from "./components/Profile/Profile";

import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./hoc/PrivateRoute";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/maps" exact component={Maps} />
        <PrivateRoute path="/profile" exact component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
