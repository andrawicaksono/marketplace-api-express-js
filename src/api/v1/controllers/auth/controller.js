module.exports.controller = (authService) => {
    return {
        signUp: async (req, res, next) => {
            try {
                const { email, username, password, full_name } = req.body;
                const data = {
                    email,
                    username,
                    password,
                    full_name
                }

                const [user, err] = await authService.signUp(data);
                if (err) throw err;

                return res.status(200).send({
                    message: "Sign up success",
                    data: user
                });
            } catch (err) {
                next(err);
            }
        }
    }
}