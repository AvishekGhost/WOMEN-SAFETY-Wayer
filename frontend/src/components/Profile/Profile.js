import React, { useContext, useEffect, useState } from "react";

import { FormLabel, ListGroupItem, Card } from "react-bootstrap";
import { IonButton, IonLoading } from "@ionic/react";

import { firestore } from "../../FirebaseConfig";
import { AuthContext } from "../../context/authContext";
import { handleLogout } from "../../utility";

import { toast } from "../Toast/Toast";

const Profile = (props) => {
	const { currentUser } = useContext(AuthContext);
	const { history } = props;
	const [showUser, setShowUser] = useState(null);
	const [isDataReady, setIsDataReady] = useState(false);
	const [busy, setBusy] = useState(true);

	useEffect(() => {
		setBusy(true);
		firestore
			.collection("users")
			.doc(currentUser.uid)
			.get()
			.then((doc) => {
				const newShowUser = {
					imageURL: doc.data().imageURL,
					name: doc.data().name,
					phone: doc.data().phone,
					age: doc.data().age,
					email: doc.data().email,
					gender: doc.data().gender,
				};
				setShowUser(newShowUser);
				setIsDataReady(true);
				setBusy(false);
			})
			.catch((err) => {
				toast(err, 4000);
				setBusy(false);
			});
	}, [currentUser]);

	const signOut = () => {
		handleLogout().then(() => {
			history.push("/");
		});
	};

	const isDataReadyForUse = () => {
		return isDataReady;
	};

	return (
		<>
			<IonLoading message="Please wait" duration={0} isOpen={busy} />
			{isDataReadyForUse() && (
				<>
					<ListGroupItem>
						<img height="80vh" src={showUser.imageURL} alt="Loading"></img>
					</ListGroupItem>
					<ListGroupItem>
						<FormLabel>Name</FormLabel>
						<Card.Text>{showUser.name}</Card.Text>
					</ListGroupItem>
					<ListGroupItem>
						<FormLabel>Gender</FormLabel>
						<Card.Text>{showUser.gender}</Card.Text>
					</ListGroupItem>
					<ListGroupItem>
						<FormLabel>Age</FormLabel>
						<Card.Text>{showUser.age}</Card.Text>
					</ListGroupItem>
					<ListGroupItem>
						<FormLabel>Phone</FormLabel>
						<Card.Text>{showUser.phone}</Card.Text>
					</ListGroupItem>
					<IonButton onClick={signOut}>Logout</IonButton>
				</>
			)}
		</>
	);
};

export default Profile;
