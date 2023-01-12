module.exports.service = (userRepository) => {
    return {
        signUp: async (data) => {
            try {
                let [checkEmail, errCheckEmail] = await userRepository.findByFilter({
                    email: data.email
                });

                if (checkEmail) return [null, new Error('galat;409;001;Email telah terdaftar')];
                if (errCheckEmail) return [null, errCheckEmail];

                let [checkUsername, errCheckUsername] = await userRepository.findByFilter({
                    username: data.username
                });

                if (errCheckUsername) return [null, errCheckUsername];
                if (checkUsername) return [null, new Error('galat;409;002;Username telah terdaftar')];

                [user, err] = await userRepository.create(data);
                if (err) return [null, err];

                return [user, null];
            } catch (err) {
                return [null, err];
            }
        }
    }
}