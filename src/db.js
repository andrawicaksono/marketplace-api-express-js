const mongoose = require('mongoose');
const config = require('config');

module.exports = () => {
    const url = config.get('db.url');
    const name = config.get('db.name');

    mongoose.connect(url)
        .then(() => console.log(`Connected to DB (${name})`));
}
