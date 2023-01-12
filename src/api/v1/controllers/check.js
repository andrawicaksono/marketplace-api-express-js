module.exports.checkController = {
    check: (req, res) => {
        try {
            return res.status(200).send({
                message: "OK"
            });
        } catch (err) {
            throw err;
        }
    }
}