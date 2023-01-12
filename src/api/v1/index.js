const { routes } = require('./routes');
const { error } = require('./middlewares/error');

module.exports = (app) => {
    app.use('/api/v1', routes, error);
}
