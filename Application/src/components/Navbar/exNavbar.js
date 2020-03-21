import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import classes from "./Navbar.module.css";

import { home, map, personOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

class exNavbar extends Component {
	state = {
		isLoggedIn: true
	};

	render() {
		return (
			<Navbar expand="lg" bg="dark" variant="dark">
				<div className={classes.navTabBar}>
					<Nav>
						<Nav.Link href="/home">
							<IonIcon src={home} />
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="/maps">
							<IonIcon src={map} />
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="/profile">
							<IonIcon src={personOutline} />
						</Nav.Link>
					</Nav>
				</div>
			</Navbar>
		);
	}
}

export default exNavbar;
