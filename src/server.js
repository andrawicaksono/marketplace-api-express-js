const { app } = require('./app');

try {
    const server = app();
    const port = process.env.PORT || 3000;
    server.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
} catch (err) {
    throw new Error(err);
}