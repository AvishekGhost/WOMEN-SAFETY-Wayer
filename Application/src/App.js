import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/exNavbar";
import Home from "./components/Home/Home.js";
import Maps from "./components/Maps/Maps";
import Profile from "./components/Profile/Profile";

import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register";
import AuthHome from "./components/Auth/AuthHome";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route path="/" exact component={AuthHome} />
				<Route path="/login" component={Login} exact />
				<Route path="/register" exact component={Register} />
				<Route path="/home" exact component={Home} />
				<Route path="/maps" exact component={Maps} />
				<Route path="/profile" exact component={Profile} />
			</Switch>
		</div>
	);
}

export default App;
