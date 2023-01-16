module.exports.repository = (User) => {
    return {
        create: async (data) => {
            try {
                const newUser = new User(data);
                await newUser.setPassword(data.password);
                const user = await newUser.save();
                return [user, null];
            } catch (err) {
                return [null, err];
            }
        },

        findByFilter: async (data) => {
            try {
                const user = await User.findOne(data).exec();

                if (!user) return [null, new Error('galat;401;003;User tidak ditemukan User is not found;')];
                return [user, null];
            } catch (err) {
                return [null, err];
            }
        }
    }
}