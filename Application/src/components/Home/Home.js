import React, { useState, useEffect } from "react";
import { firebase } from "../../FirebaseConfig.js";

import {
	IonLoading,
	IonList,
	IonInput,
	IonItem,
	IonText,
	IonButton
} from "@ionic/react";

const Home = () => {
	const [busy, setBusy] = useState(true);

	const Nodes = ["node1", "node2", "node3"];
	const [msg, setmsg] = useState("");
	const [messeges, setmesseges] = useState([]);
	const [currentNode, setCurrentNode] = useState(Nodes[0]);
	const [currentLocation, setCurrentLocation] = useState();

	const handleSubmit = () => {
		if (msg.trim() !== "") {
			writeMessageToDB(msg);
		}
		setmsg("");
	};

	const writeMessageToDB = message => {
		if (currentNode.trim() !== "") {
			firebase
				.database()
				.ref(`messages/${currentNode}`)
				.push({
					text: message
				});
		} else {
			alert("assigning you a node");
		}
	};

	useEffect(() => {
		setBusy(true);
		if (currentNode.trim() !== "") {
			let messegeDB = firebase.database().ref(`messages/${currentNode}`);

			messegeDB.on("value", snapshot => {
				let newMesseges = [];
				snapshot.forEach(child => {
					let messege = child.val();
					newMesseges.push({
						id: child.key,
						text: messege.text
					});
				});
				setmesseges(newMesseges);
				setBusy(false);
			});
		} else {
			alert("assigning you a node");
		}
	}, [currentNode]);

	function getRndInteger() {
		let max = Nodes.length,
			min = 0;

		return Math.floor(Math.random() * (max - min)) + min;
	}

	const changeNode = () => {
		let temp = Nodes[getRndInteger()];
		setCurrentNode(temp);
	};

	return (
		<>
			<IonLoading message="Please wait" duration={0} isOpen={busy}></IonLoading>
			<IonList>
				{messeges.map((message, id) => (
					<IonItem key={id}>
						<IonText>{message.text}</IonText>
					</IonItem>
				))}
			</IonList>

			<IonItem>
				<IonInput
					value={msg}
					onChange={event => setmsg(event.target.value)}
					type="text"
					placeholder="Type a messege"
				/>
				<IonButton onClick={handleSubmit}>submit</IonButton>
			</IonItem>
			<IonItem>
				<IonText> current Node: {currentNode}</IonText>
			</IonItem>

			<IonButton onClick={changeNode}>change Node</IonButton>
		</>
	);
};

export default Home;
