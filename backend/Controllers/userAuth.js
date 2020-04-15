const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../Models/user");

exports.userSignup = async (req, res) => {
	const userExists = await User.findOne({
		email: req.body.email
	});

	if (userExists)
		return res.status(403).json({
			error: "Email is taken!"
		});
	const user = await new User(req.body);
	await user.save();
	res.status(200).json({
		msg: "Account created sucessfully!"
	});
};

exports.userSignin = (req, res) => {
	const { email, password } = req.body;

	user.findOne({ email }, (err, user) => {
		if (err || !user) {
			return res.status(401).json({
				error: "user with this email doesn't exit. Please Sign In"
			});
		}

		if (!user.authenticate(password)) {
			return res.status(401).json({
				error: "Invalid Email/Password!"
			});
		}

		const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET);

		res.cookie("t", token, { expire: new Date() + 9999 });

		const {
			name,
			blood,
			address,
			latitude,
			longitude,
			email,
			phone,
			type
		} = user;
		return res.json({
			token,
			user: {
				email,
				name,
				phone,
				blood,
				address,
				latitude,
				longitude,
				type
			}
		});
	});
};

exports.userSignout = (req, res) => {
	res.clearCookie("t");
	return res.json({
		msg: "Sign out success!"
	});
};

exports.getusers = (req, res) => {
	User.find((err, user) => {
		if (err) {
			return res.status(401).json({
				error: "Error Fetching recievers"
			});
		}
		return res.json(user);
	});
};
