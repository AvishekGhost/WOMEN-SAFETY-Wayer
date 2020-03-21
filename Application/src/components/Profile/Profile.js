import React from "react";
import { FormLabel, ListGroupItem, Card } from "react-bootstrap";

const Profile = props => {
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
		</>
	);
};

export default Profile;
