const { authService } = require('../../services/auth');
const { controller } = require('./controller');
module.exports.authController = controller(authService);