const mongoose = require('mongoose');
const config = require('config');
const { MongooseStrictFindPlugin } = require('./mongooseStrictFindPlugin')

module.exports.db = () => {
    const url = config.get('db.url');
    const name = config.get('db.name');

    mongoose.set('strictQuery', true);

    mongoose.connect(url, {
        useNewUrlParser: true
    })
        .then(() => console.log(`Connected to DB (${name})`));
}