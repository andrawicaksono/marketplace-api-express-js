const { userRepository } = require('../../repositories/user');
const { service } = require('./service');
module.exports.authService = service(userRepository);