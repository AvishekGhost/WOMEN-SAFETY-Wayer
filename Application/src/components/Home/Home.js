import React, { useState, useContext } from "react";

import { AuthContext } from "../../context/authContext";

import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Forum from "../Forum/Forum";

const Home = props => {
	const { currentUser } = useContext(AuthContext);
	const [formDisplay, setFormDisplay] = useState("login");

	return (
		<>
			{currentUser ? (
				<>
					<Forum />
				</>
			) : (
				<>
					{formDisplay === "login" ? (
						<Login setFormDisplay={setFormDisplay} />
					) : (
						<Register setFormDisplay={setFormDisplay} />
					)}
				</>
			)}
		</>
	);
};

export default Home;
