const express = require("express");
const router = express.Router();
const { loginPharmacist } = require("../controllers/pharmacistAuthController");

router.post("/login", loginPharmacist);

module.exports = router;
