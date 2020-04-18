import React from "react";

import MyCard from "../MyCard/MyCard";
import OtherCard from "../OtherCard/OtherCard";

import { IonList } from "@ionic/react";

const Messeges = ({ messeges, currentUser }) => {
	const returnMsgComponent = (text, name, email, time, imageURL) => {
		if (email === currentUser.email) {
			return (
				<div align="right">
					<MyCard name={name} text={text} time={time} imageURL={imageURL} />
				</div>
			);
		} else {
			return (
				<div align="left">
					<OtherCard name={name} text={text} time={time} imageURL={imageURL} />
				</div>
			);
		}
	};

	return (
		<IonList>
			{messeges.map((message, id) => (
				<div key={id}>
					{returnMsgComponent(
						message.text,
						message.name,
						message.email,
						message.time,
						message.imageURL
					)}
				</div>
			))}
		</IonList>
	);
};

export default Messeges;
