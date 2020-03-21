import React, { useState } from "react";
import { toast } from "../Toast/Toast";

export const DisplayMapFC = ({ currentLocation }) => {
	const mapRef = React.useRef(null);
	const [gg, setgg] = useState(null);

	React.useLayoutEffect(() => {
		if (!mapRef.current) return;
		if (!currentLocation) return;
		const H = window.H;
		const platform = new H.service.Platform({
			apikey: "GNlK1kK3P7tTxS5vrdpv4QcgVHRjxQ-DJarCupZQms0"
		});
		const defaultLayers = platform.createDefaultLayers();
		const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
			center: { lat: currentLocation.lat, lng: currentLocation.lon },
			zoom: 4,
			pixelRatio: window.devicePixelRatio || 1
		});

		setgg(hMap);

		const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

		const ui = H.ui.UI.createDefault(hMap, defaultLayers);

		console.log(behavior, ui);

		return () => {
			hMap.dispose();
		};
	}, [mapRef, currentLocation]);

	const ggFun = () => {
		const donorLocation = new window.H.map.Marker({
			lat: currentLocation.lat,
			lng: currentLocation.lon
		});
		gg.addObject(donorLocation);
		toast("Noob", 4000);
	};

	const someSHit = "40vh";

	return (
		<>
			<div className="map" ref={mapRef} style={{ height: someSHit }} />
			<button onClick={ggFun}>
				click this button to add a marker at 12 12
			</button>
		</>
	);
};
