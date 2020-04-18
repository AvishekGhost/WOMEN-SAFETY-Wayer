import React from "react";
import { IonAvatar, IonCardSubtitle } from "@ionic/react";

import "./OtherCard.css";

const OtherCard = ({ name, text, time, imageURL }) => {
	return (
		<div className="other-card-container">
			<IonAvatar slot="start" style={{ padding: "10px" }}>
				<img
					style={{
						height: "30px",
						width: "30px",
					}}
					src={imageURL}
					alt="loading"
				/>
			</IonAvatar>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					fontSize: "small",
					padding: "5px",
				}}
			>
				<IonCardSubtitle>{name}</IonCardSubtitle>
				<p>{text}</p>
				<p>
					<small>{time}</small>
				</p>
			</div>
		</div>
	);
};

export default OtherCard;
