export default function reducer(state = {}, { type, payload }) {
	switch (type) {
		case "SET_USER_STATE":
			return {
				...state,
				userData: payload
			};

		default:
			return state;
	}
}
