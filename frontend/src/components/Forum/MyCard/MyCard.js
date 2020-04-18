import React from "react";
import { IonAvatar, IonCardSubtitle } from "@ionic/react";

import "./MyCard.css";

const MyCard = ({ name, text, time, imageURL }) => {
	return (
		<div className="my-card-container">
			<IonAvatar slot="end" style={{ padding: "10px" }}>
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
				<IonCardSubtitle style={{ color: "#ececec" }}>{name}</IonCardSubtitle>
				<p style={{ color: "white" }}>{text}</p>
				<p style={{ color: "white" }}>
					<small>{time}</small>
				</p>
			</div>
		</div>
	);
};

export default MyCard;
