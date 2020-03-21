import React from "react";
import { IonAvatar, IonItem, IonLabel } from "@ionic/react";

const OtherCard = ({ name, text, time }) => {
	return (
		<IonItem>
			<IonItem slot="start" style={{ maxWidth: "60vw" }}>
				<IonAvatar slot="start">
					<img
						src="https://avatars0.githubusercontent.com/u/33727239?s=400&u=42bad3b9a947f4385ba57e0b59f7f526408eb8f5&v=4"
						alt="loading"
					/>
				</IonAvatar>
				<IonLabel>
					<h2>{name}</h2>
					<h3>{text}</h3>
					<p>{time}</p>
				</IonLabel>
			</IonItem>
		</IonItem>
	);
};

export default OtherCard;
