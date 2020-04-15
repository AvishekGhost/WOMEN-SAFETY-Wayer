import React, { useState, useCallback } from "react";
import { withRouter } from "react-router-dom";
import {
	IonContent,
	IonInput,
	IonButton,
	IonItem,
	IonLoading,
	IonText
} from "@ionic/react";

import firebase, { storage } from "../../../FirebaseConfig";
import { writeUserData } from "../../../utility";
import { toast } from "../../Toast/Toast";

const Signup = props => {
	// const [image, setImage] = useState(null);
	// const [fileURL, setfileURL] = useState(null);

	// const [productName, setProductName] = useState("");
	// const [productDescription, setProductDescription] = useState("");
	// const [productPrice, setProductPrice] = useState("");
	// const [productType, setProductType] = useState("");
	// const [productQuantity, setProductQuantity] = useState("");

	// const [busy, setBusy] = useState(false);

	// const handleChange = event => {
	// 	if (event.target.files[0]) {
	// 		setImage(event.target.files[0]);
	// 		setfileURL(URL.createObjectURL(event.target.files[0]));
	// 	}
	// };

	// const clearFields = () => {
	// 	setImage(null);
	// 	setfileURL(null);
	// 	setProductName("");
	// 	setProductDescription("");
	// 	setProductPrice("");
	// 	setProductType("");
	// };

	// const uploadFulldata = async url => {
	// 	try {
	// 		const userCredentials = await firebase
	// 			.auth()
	// 			.createUserWithEmailAndPassword(email, password);
	// 		writeUserData(userCredentials.user.uid, userName, email);
	// 		toast("", 4000);
	// 		history.push("/");
	// 	} catch (err) {
	// 		toast("", 4000);
	// 		return false;
	// 	}
	// };

	// const handleUpload = () => {
	// 	setBusy(true);

	// 	if (
	// 		productName.trim() === "" ||
	// 		productDescription.trim() === "" ||
	// 		productPrice.trim() === "" ||
	// 		productQuantity.trim() === "" ||
	// 		productType.trim() === ""
	// 	) {
	// 		setBusy(false);
	// 		return toast("Inputs cannot be empty");
	// 	}

	// 	const currentdate = new Date();
	// 	const dateTime =
	// 		currentdate.getDate() +
	// 		"." +
	// 		currentdate.getMonth() +
	// 		"." +
	// 		currentdate.getFullYear() +
	// 		"@" +
	// 		currentdate.getHours() +
	// 		":" +
	// 		currentdate.getMinutes() +
	// 		":" +
	// 		currentdate.getSeconds();

	// 	if (image) {
	// 		const id = dateTime + image.name;
	// 		const uploadTask = storage.ref(`products/${id}`).put(image);
	// 		uploadTask.on(
	// 			"state_changed",
	// 			snapshot => {},
	// 			error => {
	// 				console.log(error);
	// 			},
	// 			() => {
	// 				storage
	// 					.ref("products")
	// 					.child(id)
	// 					.getDownloadURL()
	// 					.then(url => {
	// 						if (uploadFulldata(url, dateTime)) {
	// 							clearFields();
	// 							toast("product uploaded successfiully", 4000);
	// 						}
	// 						setBusy(false);
	// 					});
	// 			}
	// 		);
	// 	} else {
	// 		setBusy(false);
	// 		return toast("cant submit without image");
	// 	}
	// };

	// const handleSignUp = useCallback(
	// 	async (email, password, userName) => {
	// 		try {
	// 			const userCredentials = await firebase
	// 				.auth()
	// 				.createUserWithEmailAndPassword(email, password);
	// 			writeUserData(userCredentials.user.uid, userName, email);
	// 			history.push("/");
	// 		} catch (err) {
	// 			setError(err);
	// 			setIsLoading(false);
	// 		}
	// 	},
	// 	[history]
	// );

	// const formSubmit = useCallback(
	// 	event => {
	// 		event.preventDefault();

	// 		const { username, email, password } = event.target.elements;

	// 		handleSignUp(email.value, password.value, username.value);
	// 	},
	// 	[handleSignUp]
	// );

	// return (
	// 	<>
	// 		<IonContent style={{ textAlign: "center" }}>
	// 			<IonLoading
	// 				message="please wait"
	// 				duration={0}
	// 				isOpen={busy}
	// 			></IonLoading>
	// 			<IonItem>
	// 				<IonText>Photo </IonText>
	// 				<input type="file" onChange={handleChange} />
	// 			</IonItem>
	// 			<IonItem>
	// 				<img src={fileURL} alt=""></img>
	// 			</IonItem>
	// 			<IonItem>
	// 				<IonInput
	// 					value={productType}
	// 					onIonChange={event => setProductType(event.target.value)}
	// 					placeholder="Type"
	// 					type="text"
	// 					required
	// 				/>
	// 			</IonItem>
	// 			<IonItem>
	// 				<IonInput
	// 					value={productName}
	// 					onIonChange={event => setProductName(event.target.value)}
	// 					placeholder="Product Name"
	// 					type="email"
	// 					required
	// 				/>
	// 			</IonItem>
	// 			<IonItem>
	// 				<IonInput
	// 					value={productDescription}
	// 					onIonChange={event => setProductDescription(event.target.value)}
	// 					placeholder="Description"
	// 					type="text"
	// 					required
	// 				/>
	// 			</IonItem>
	// 			<IonItem>
	// 				<IonInput
	// 					value={productPrice}
	// 					onIonChange={event => setProductPrice(event.target.value)}
	// 					placeholder="Price"
	// 					type="number"
	// 					required
	// 				/>
	// 			</IonItem>

	// 			<IonItem>
	// 				<IonInput
	// 					value={productQuantity}
	// 					onIonChange={event => setProductQuantity(event.target.value)}
	// 					placeholder="Quantity"
	// 					type="number"
	// 					required
	// 				/>
	// 			</IonItem>

	// 			<IonButton className="ion-padding" onClick={handleUpload}>
	// 				Upload
	// 			</IonButton>
	// 		</IonContent>
	// 	</>
	// );
	return <h1>gg</h1>;
};

export default withRouter(Signup);
