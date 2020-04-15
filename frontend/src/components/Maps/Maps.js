import React, { useState, useEffect } from "react";
import { DisplayMapFC } from "./DisplayMapFC";
import { IonLoading } from "@ionic/react";
import { Plugins } from "@capacitor/core";

const Maps = () => {
	const [currentLocation, setCurrentLocation] = useState({ lat: 0, lon: 0 });
	const [busy, setBusy] = useState(false);

	const { Geolocation } = Plugins;

	useEffect(() => {
		setBusy(true);
		Geolocation.getCurrentPosition()
			.then(resp => {
				let temp = {
					lat: resp.coords.latitude,
					lon: resp.coords.longitude
				};
				setCurrentLocation(temp);
			})
			.catch(error => {
				console.log(error);
			});

		Geolocation.watchPosition({}, (position, err) => {
			if (!err) {
				console.log(position.coords);
			}
		});
		setBusy(false);
	}, [Geolocation]);

	return (
		<>
			<IonLoading message="Please wait" duration={0} isOpen={busy}></IonLoading>
			<DisplayMapFC currentLocation={currentLocation} />
		</>
	);
};

export default Maps;
