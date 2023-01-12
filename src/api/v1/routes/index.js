const express = require('express');
const router = express.Router();

const { checkRoutes } = require("./check");

router.use('/', checkRoutes);

module.exports.routes = router;