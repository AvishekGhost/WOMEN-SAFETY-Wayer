import React from "react";
import { IonAvatar, IonCardSubtitle } from "@ionic/react";

import "./MyCard.css";

const MyCard = ({ name, text, time }) => {
  return (
    <div className="my-card-container">
      <IonAvatar slot="end" style={{ padding: "10px" }}>
        <img
          style={{
            height: "30px",
            width: "30px",
          }}
          src="https://avatars0.githubusercontent.com/u/33727239?s=400&u=42bad3b9a947f4385ba57e0b59f7f526408eb8f5&v=4"
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

export default MyCard;
