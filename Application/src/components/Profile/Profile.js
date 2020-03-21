import React, { useContext } from "react";
import { FormLabel, ListGroupItem, Card } from "react-bootstrap";
import { IonButton } from "@ionic/react";

import { AuthContext } from "../../context/authContext";
import { handleLogout } from "../../utility";

const Profile = props => {
	const { currentUser } = useContext(AuthContext);
	const { history } = props;

	const signOut = () => {
		handleLogout().then(() => {
			history.push("/");
		});
	};

	return (
		<>
			<ListGroupItem>
				<img
					src="http://www.jaduniv.edu.in/upload_files/profile_images/807.jpg"
					alt="ukr pic loading"
				></img>
			</ListGroupItem>
			<ListGroupItem>
				<FormLabel>Name</FormLabel>
				<Card.Text>UTTAM KUMAR ROY</Card.Text>
			</ListGroupItem>
			<ListGroupItem>
				<FormLabel>Gender</FormLabel>

				<Card.Text>0 times</Card.Text>
			</ListGroupItem>
			<ListGroupItem>
				<FormLabel>Crush name</FormLabel>

				<Card.Text>Parama Bhaumik</Card.Text>
			</ListGroupItem>
			<ListGroupItem>
				<FormLabel>Description</FormLabel>

				<Card.Text>Some Description</Card.Text>
			</ListGroupItem>
			<IonButton onClick={signOut}>Logout</IonButton>
			{console.log(currentUser.email)}
		</>
	);
};

export default Profile;
