import React from "react";
import { IonAvatar, IonLabel, IonTextarea } from "@ionic/react";

import "./OtherCard.css";

const OtherCard = ({ name, text, time }) => {
	return (
		<div className="other-card-container">
			<IonAvatar slot="start" style={{ padding: "10px" }}>
				<img
					src="https://avatars0.githubusercontent.com/u/33727239?s=400&u=42bad3b9a947f4385ba57e0b59f7f526408eb8f5&v=4"
					alt="loading"
				/>
			</IonAvatar>
			<IonLabel style={{ padding: "10px" }}>
				<h3>{name}</h3>
				<h2>{text}</h2>
				<p>{time}</p>
			</IonLabel>
		</div>
	);
};

export default OtherCard;
