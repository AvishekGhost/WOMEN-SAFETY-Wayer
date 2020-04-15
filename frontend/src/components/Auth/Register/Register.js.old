import { IonInput, IonButton, IonItem, IonLabel } from "@ionic/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "../Toast/Toast";

const Register = props => {
	const [busy, setBusy] = useState(false);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cpassword, setCPassword] = useState("");

	const handleReginster = async () => {
		setBusy(true);

		setBusy(false);
		props.history.replace("/home");
	};

	return (
		<>
			<div style={{ marginTop: "20vh" }}>
				<IonItem>
					<IonLabel position="floating">Email</IonLabel>
					<IonInput
						value={email}
						onIonChange={event => setEmail(event.target.value)}
						type="email"
						required
					></IonInput>
				</IonItem>

				<IonItem>
					<IonLabel position="floating">Password</IonLabel>
					<IonInput
						value={password}
						onIonChange={event => setPassword(event.target.value)}
						type="password"
						required
					></IonInput>
				</IonItem>
				<IonItem>
					<IonLabel position="floating">Confirm Password</IonLabel>
					<IonInput
						value={cpassword}
						onIonChange={event => setCPassword(event.target.value)}
						type="password"
						required
					></IonInput>
				</IonItem>

				<div style={{ marginTop: "2vh" }}>
					<IonButton expand="block" onClick={handleReginster}>
						Reginster
					</IonButton>
				</div>
				<p>
					Already have an account ? <Link to="/login">Login</Link>
				</p>
			</div>
		</>
	);
};

export default Register;
