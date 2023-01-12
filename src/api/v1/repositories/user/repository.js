module.exports.repository = (User) => {
    return {
        create: async (data) => {
            try {
                const newUser = new User(data);
                const user = await newUser.save();
                return [user, null];
            } catch (err) {
                return [null, err];
            }
        },

        findByFilter: async (data) => {
            try {
                const user = await User.findOne(data).exec();
                return [user, null];
            } catch (err) {
                return [null, err];
            }
        }
    }
}