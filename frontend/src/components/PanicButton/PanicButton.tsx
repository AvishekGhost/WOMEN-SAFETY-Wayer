import React from "react";
import { IonFab, IonIcon } from '@ionic/react';
import classes from './PanicButton.module.css';
import SOSIcon from '../../assets/SOSIcon.svg';



const PanicButton: React.FC = () => {
  const handlePanic = () => {
    console.log("panic")
  }

  return (
    <IonFab vertical="top" horizontal="end" slot="fixed" className={classes.panicBtnContainer}>
      <IonIcon onClick={handlePanic} src={SOSIcon} className={classes.panicBtnIcon}></IonIcon>
    </IonFab>
  );
};

export default PanicButton;
