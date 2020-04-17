import React, { useState, useEffect, useContext, Fragment } from "react";
import firebase from "../../FirebaseConfig.js";

import { AuthContext } from "../../context/authContext";

import { toast } from "../Toast/Toast";
import MyCard from "./MyCard/MyCard";
import OtherCard from "./OtherCard/OtherCard";
// import "./ForumWrapper.css";
import {
  IonLoading,
  IonList,
  IonInput,
  IonButton,
  IonItem,
  IonFooter,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonIcon,
  IonContent,
  IonApp,
} from "@ionic/react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const ForumWrapper = () => {
  const [busy, setBusy] = useState(true);

  const { currentUser } = useContext(AuthContext);

  const Nodes = ["node1", "node2", "node3"];
  const [msg, setmsg] = useState("");
  const [messeges, setmesseges] = useState([]);
  const [currentNode, setCurrentNode] = useState(Nodes[0]);
  //const [currentLocation, setCurrentLocation] = useState();

  const handleSubmit = () => {
    setBusy(true);

    if (msg.trim() === "") {
      toast("Cannot send an Empty msg", 4000);
    } else {
      writeMessageToDB(msg);
    }

    setmsg("");

    setBusy(false);
  };

  const getCurrentTimeDate = () => {
    let date = new Date().getDate(),
      month = new Date().getMonth() + 1,
      year = new Date().getFullYear(),
      hours = new Date().getHours(),
      min = new Date().getMinutes(),
      sec = new Date().getSeconds();

    return (
      date + "/" + month + "/" + year + " @" + hours + ":" + min + ":" + sec
    );
  };

  const writeMessageToDB = (message) => {
    if (currentNode.trim() !== "") {
      firebase.database().ref(`messages/${currentNode}`).push({
        text: message,
        name: "Current User",
        email: currentUser.email,
        time: getCurrentTimeDate(),
      });
    } else {
      alert("assigning you a node");
    }
  };

  useEffect(() => {
    setBusy(true);
    if (currentNode.trim() !== "") {
      let messegeDB = firebase.database().ref(`messages/${currentNode}`);

      messegeDB.on("value", (snapshot) => {
        let newMesseges = [];
        snapshot.forEach((child) => {
          let messege = child.val();

          newMesseges.push({
            id: child.key,
            text: messege.text,
            name: messege.name,
            email: messege.email,
            time: messege.time,
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

  const returnMsgComponent = (text, name, email, time) => {
    if (email === currentUser.email) {
      return (
        <div align="right">
          <MyCard name={name} text={text} time={time} />
        </div>
      );
    } else {
      return (
        <div align="left">
          <OtherCard name={name} text={text} time={time} />
        </div>
      );
    }
  };

  return (
    <IonApp>
      <IonLoading message="Please wait" duration={0} isOpen={busy} />
      <IonList>
        {messeges.map((message, id) => (
          <div key={id}>
            {returnMsgComponent(
              message.text,
              message.name,
              message.email,
              message.time
            )}
          </div>
        ))}
      </IonList>
    </IonApp>
  );
};

const footerStyle = {
  fontSize: "10px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  position: "fixed",
  left: "0",
  bottom: "0px",
  height: "50px",
  width: "100%",
};

const phantomStyle = {
  display: "block",
  height: "50px",
  width: "100%",
};

const BottomBar = ({ children }) => {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
};

const Forum = () => {
  const [msg, setmsg] = useState("");
  return (
    <div>
      <ForumWrapper />
      <BottomBar>
        <IonItem className="message-send-container">
          <IonInput
            value={msg}
            // onIonChange={(event) => setmsg(event.target.value)}
            pattern="text"
            placeholder="Type a messege"
          />
          <IonButton>Send</IonButton>
        </IonItem>
      </BottomBar>
    </div>
  );
};

export default Forum;
