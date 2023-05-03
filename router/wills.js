const express = require("express");

const { getAllWills } = require("../prismaFC");

const router = express.Router();

router.get("/", getAllWills);

module.exports = router;
