import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "../../Toast/Toast";
import backImage from "./images/bg-01.jpg";
import { IonLoading } from "@ionic/react";

import "./gg.css";
import "./util.css";

const Home = props => {
	const [busy, setBusy] = useState(false);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async () => {
		setBusy(true);
		console.log(email);
		console.log(password);
		setBusy(false);
		toast("Succ logged in", 4000);
		props.history.replace("/home");
	};

	return (
		<>
			<IonLoading message="Please wait" duration={0} isOpen={busy}></IonLoading>
			<div className="limiter">
				<div className="container-login100">
					<div className="wrap-login100">
						<div className="login100-form validate-form">
							<span className="login100-form-title p-b-34">Account Login</span>
							<div
								className="wrap-input100 rs1-wrap-input100 validate-input m-b-20"
								data-validate="Type user name"
							>
								<input
									id="first-name"
									className="input100"
									type="text"
									name="username"
									onChange={event => {
										setEmail(event.target.value);
									}}
									placeholder="User name"
								/>
								<span className="focus-input100"></span>
							</div>

							<div
								className="wrap-input100 rs2-wrap-input100 validate-input m-b-20"
								data-validate="Type password"
							>
								<input
									className="input100"
									type="password"
									name="pass"
									onChange={event => {
										setPassword(event.target.value);
									}}
									placeholder="Password"
								/>
								<span className="focus-input100"></span>
							</div>

							<div className="container-login100-form-btn">
								<button onClick={handleLogin} className="login100-form-btn">
									Sign in
								</button>
							</div>

							<div className="w-full text-center p-t-27 p-b-239">
								<span className="txt1">Forgot</span>

								<a href="/" className="txt2">
									User name / password?
								</a>
							</div>

							<div className="w-full text-center">
								<Link className="txt3" to="/regiter">
									Sign Up
								</Link>
							</div>
						</div>

						<div
							className="login100-more"
							style={{ backgroundImage: `url(${backImage})` }}
						></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
