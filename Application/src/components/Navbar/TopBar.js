import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { AuthContext } from "../../context/authContext";

import { Link, withRouter } from "react-router-dom";
import classes from "./TopBar.module.css";

import { home, map, personOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const TopBar = props => {
	const { currentUser } = useContext(AuthContext);

	return (
		<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
			{currentUser ? (
				<div className={classes.navTabBar}>
					<Nav>
						<Nav.Link>
							<Link to="/" className={classes.whiteText}>
								<IonIcon src={home} />
							</Link>
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link>
							<Link to="/maps" className={classes.whiteText}>
								<IonIcon src={map} />
							</Link>
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link>
							<Link to="/profile">
								<IonIcon src={personOutline} />
							</Link>
						</Nav.Link>
					</Nav>
				</div>
			) : null}
		</Navbar>
	);
};

export default withRouter(TopBar);
