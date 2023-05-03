const express = require("express");

const { getWill, createWill, updateWill } = require("../prismaFC");

const router = express.Router();

router.get("/:email", getWill).post("/", createWill).patch("/", updateWill);

module.exports = router;
