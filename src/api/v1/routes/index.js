const express = require('express');
const router = express.Router();

const { checkRoutes } = require('./check');
const { authRoutes } = require('./auth')

router.use('/', checkRoutes);
router.use('/auth', authRoutes);

module.exports.routes = router;