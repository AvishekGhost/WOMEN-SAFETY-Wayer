import React from "react";
import { IonAvatar, IonLabel } from "@ionic/react";

const OtherCard = ({ name, text, time }) => {
  return (
    <div
      color="primary"
      style={{
        maxWidth: "60vw",
        backgroundColor: "#fcf7bb",
        display: "flex",
        margin: "5px",
        marginTop: "15px",
        borderRadius: "15px 15px 15px 0px",
      }}
    >
      <IonAvatar slot="start" style={{ padding: "10px" }}>
        <img
          src="https://avatars0.githubusercontent.com/u/33727239?s=400&u=42bad3b9a947f4385ba57e0b59f7f526408eb8f5&v=4"
          alt="loading"
        />
      </IonAvatar>
      <IonLabel style={{ padding: "10px" }}>
        <h2>{name}</h2>
        <h3>{text}</h3>
        <p>{time}</p>
      </IonLabel>
    </div>
  );
};

export default OtherCard;
