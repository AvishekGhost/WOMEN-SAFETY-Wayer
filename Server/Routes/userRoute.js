const express = require("express");
const {
	userSignup,
	userSignin,
	userSignout,
	getusers
} = require("../Controllers/userAuth");

const router = express.Router();

router.post("/user/signup", userSignup);
router.post("/user/signin", userSignin);
router.get("/user/signout", userSignout);
router.get("/user/getusers", getusers);

module.exports = router;

// {
//   "name": "Im URK",
//   "age" : 69,
//   "gender": "T",
//   "phone": 1234,
//   "address": "URK house",
//   "SOS_phone": 1221515815,
//   "aadhar": 21,
//   "email": "im@nigga.com",
//   "password": "1234"
// }
