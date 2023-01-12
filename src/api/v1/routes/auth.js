const express = require('express');
const { authController } = require('../controllers/auth');

const router = express.Router()

router.route('/signup').post(
    authController.signUp
);

module.exports.authRoutes = router;