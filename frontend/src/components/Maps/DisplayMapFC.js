import React, { useState, useEffect } from "react";
import { toast } from "../Toast/Toast";

import {
	IonInput,
	IonButton,
	IonItem,
	IonLabel,
	IonLoading,
	IonApp,
	IonContent,
} from "@ionic/react";

import Red from "../../assets/Red.svg";
import Blue from "../../assets/Blue.svg";
import Green from "../../assets/Green.svg";

import cords from "./cord.json";
import someShit from "./object.json";

import "./DisplayMapFC.css";

export const DisplayMapFC = ({ currentLocation }) => {
	const H = window.H;
	const platform = new H.service.Platform({
		apikey: "GNlK1kK3P7tTxS5vrdpv4QcgVHRjxQ-DJarCupZQms0",
	});

	const [busy, setBusy] = useState(true);
	const mapRef = React.useRef(null);
	const [hMapRef, sethMapRef] = useState(null);

	const [destinationAddress, setDestinationAddress] = useState("");
	const [destinationCords, setDestinationCords] = useState(null);
	const [avoidCords, setAvoidCords] = useState([]);

	const [isFindButtonPressed, setIsFindButtonPressed] = useState(false);
	const [isMyLocationBtnPressed, setIsMyLocationBtnnPressed] = useState(false);

	const userMarker = new H.map.Icon(Blue);
	const destinationMarker = new H.map.Icon(Green);
	const avoidLocationMarker = new H.map.Icon(Red);

	const geocode = () => {
		if (destinationAddress.trim() === "") return;
		else {
			var geocoder = platform.getGeocodingService(),
				geocodingParameters = {
					searchText: destinationAddress,
					jsonattributes: 1,
				};

			geocoder.geocode(
				geocodingParameters,
				(result) => {
					let locations = result.response.view[0].result;

					let position = {
						lat: locations[0].location.displayPosition.latitude,
						lng: locations[0].location.displayPosition.longitude,
					};
					setDestinationCords(position);
				},
				(err) => {
					toast(err);
				}
			);
		}
	};

	useEffect(() => {
		if (!mapRef.current) return;
		if (!currentLocation) return;

		const defaultLayers = platform.createDefaultLayers();
		const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
			center: { lat: currentLocation.lat, lng: currentLocation.lng },
			zoom: 12,
			pixelRatio: window.devicePixelRatio || 1,
		});

		sethMapRef(hMap);

		const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));
		const ui = H.ui.UI.createDefault(hMap, defaultLayers);
		console.log(behavior, ui);

		setBusy(false);

		return () => {
			hMap.dispose();
		};
	}, [mapRef, currentLocation]);

	useEffect(() => {
		setIsFindButtonPressed(false);
		geocode();
	}, [destinationAddress]);

	const handleFindDestination = () => {
		setBusy(true);
		if (destinationAddress.trim() === "") {
			setBusy(false);
			return toast("Destination can not be empty");
		}

		let markers = [];
		hMapRef.removeObjects(hMapRef.getObjects());

		if (destinationCords) {
			console.log(destinationCords);
			const donorLocation = new window.H.map.Marker(
				{ lat: destinationCords.lat, lng: destinationCords.lng },
				{ icon: destinationMarker }
			);
			markers.push(donorLocation);
		}

		if (isMyLocationBtnPressed) {
			console.log(currentLocation.lat, currentLocation.lng);
			const userLocation = new window.H.map.Marker(
				{ lat: currentLocation.lat, lng: currentLocation.lng },
				{ icon: userMarker }
			);
			markers.push(userLocation);
		}

		let group = new H.map.Group();

		group.addObjects(markers);
		hMapRef.addObject(group);

		hMapRef.getViewModel().setLookAtData({
			bounds: group.getBoundingBox(),
		});

		setIsFindButtonPressed(true);

		setBusy(false);
	};

	const setCurrentLocationMarkerOnMap = (zoom) => {
		if (!currentLocation) return;
		setBusy(true);
		var userCurrentLocation = new H.map.Marker(
				{ lat: currentLocation.lat, lng: currentLocation.lng },
				{ icon: userMarker }
			),
			group = new H.map.Group();

		group.addObjects([userCurrentLocation]);
		hMapRef.addObject(group);

		hMapRef.getViewModel().setLookAtData({
			bounds: group.getBoundingBox(),
			zoom: zoom,
		});
		setBusy(false);
		toast("Showing your location", 2000);
	};

	const handleMyLocation = () => {
		setIsMyLocationBtnnPressed(true);
		setCurrentLocationMarkerOnMap(16);
	};

	const handleShowRoute = () => {
		setBusy(true);

		hMapRef.removeObjects(hMapRef.getObjects());

		let avoidareas = ""; // avoidareas=  "52.517100760,13.3905424488;52.5169701849,13.391808451"

		const request = {
			waypoint0: `geo!${currentLocation.lat},${currentLocation.lng}`,
			waypoint1: `geo!${destinationCords.lat},${destinationCords.lng}`,
			mode: "fastest;car;traffic:disabled",
			avoidareas: avoidareas,
			representation: "display",
		};

		const router = platform.getRoutingService();

		router.calculateRoute(
			request,
			(response) => {
				const shape = response.response.route[0].shape.map((x) => x.split(","));
				const linestring = new H.geo.LineString();
				shape.forEach((s) => linestring.pushLatLngAlt(s[0], s[1]));
				const routeLine = new H.map.Polyline(linestring, {
					style: { strokeColor: "red", lineWidth: 3 },
				});

				hMapRef.addObject(routeLine);
				hMapRef
					.getViewModel()
					.setLookAtData({ bounds: routeLine.getBoundingBox() });

				toast("Showing safest route", 2000);
				setBusy(false);
			},
			(err) => {
				toast("No route exists", 2000);
				setBusy(false);
			}
		);

		let desti = new H.map.Marker(
				{ lat: destinationCords.lat, lng: destinationCords.lng },
				{ icon: destinationMarker }
			),
			current = new H.map.Marker(
				{ lat: currentLocation.lat, lng: currentLocation.lng },
				{ icon: userMarker }
			),
			group = new H.map.Group();

		group.addObjects([desti, current]);
		hMapRef.addObject(group);

		hMapRef.getViewModel().setLookAtData({
			bounds: group.getBoundingBox(),
		});
	};

	const handdleClear = () => {
		setBusy(true);

		hMapRef.removeObjects(hMapRef.getObjects());
		hMapRef.setCenter({ lat: currentLocation.lat, lng: currentLocation.lng });
		hMapRef.setZoom(12);

		setDestinationAddress("");

		setBusy(false);
		toast("Map cleared", 2000);
	};

	return (
		<IonApp>
			<IonLoading message="Please wait" duration={0} isOpen={busy} />
			<div ref={mapRef} className="map-container" />
			<IonContent>
				<div className="bottom-bar-marker-info-container">
					<IonItem className="bottom-bar-marker-info-ion-icon">
						<IonLabel>Your Location</IonLabel>
						<img src={Blue} height="45px" width="45px" alt="" />
					</IonItem>
					<IonItem className="bottom-bar-marker-info-ion-icon">
						<IonLabel>Destination</IonLabel>
						<img src={Green} height="50px" width="50px" alt="" />
					</IonItem>
					<IonItem className="bottom-bar-marker-info-ion-icon">
						<IonLabel>Unsafe Location</IonLabel>
						<img src={Red} height="50px" width="50px" alt="" />
					</IonItem>
				</div>
				<IonItem>
					<IonInput
						value={destinationAddress}
						type="text"
						placeholder="Enter Destination"
						onIonChange={(e) => {
							setDestinationAddress(e.target.value);
						}}
					/>
					<IonButton color="warning" onClick={handleFindDestination}>
						Find
					</IonButton>
				</IonItem>
				<IonItem>
					<div className="bottom-bar-buttons-container">
						<IonButton onClick={handleMyLocation}>My Location</IonButton>
						<IonButton
							color="success"
							onClick={handleShowRoute}
							disabled={!isFindButtonPressed}
						>
							Show Route
						</IonButton>
						<IonButton color="danger" onClick={handdleClear}>
							Clear
						</IonButton>
					</div>
				</IonItem>
			</IonContent>
		</IonApp>
	);
};
