const { User } = require('../../models/user')
const { repository } = require('./repository')
module.exports.userRepository = repository(User);