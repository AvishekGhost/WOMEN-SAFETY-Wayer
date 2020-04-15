import firebase, { firestore } from "./FirebaseConfig";

export const handleLogout = async () => {
	try {
		await firebase.auth().signOut();
	} catch (err) {
		console.log(err);
	}
};

export const writeUserData = async (
	userId,
	name,
	email,
	age,
	gender,
	imageURL = "",
	address,
	phone,
	aadhar,
	SOS_phone
) => {
	try {
		firestore
			.collection("users")
			.doc(userId)
			.set({
				name: name,
				email: email,
				gender: gender,
				age: age,
				aadhar: aadhar,
				imageURL: imageURL,
				address: address,
				phone: phone,
				SOS_phone: SOS_phone
			});
	} catch (err) {
		console.log(err);
	}
};

export const getUserData = async userId => {
	try {
		const userRef = await firestore
			.collection("users")
			.doc(userId)
			.get();
		return userRef.data();
	} catch (err) {
		console.log(err);
	}
};
