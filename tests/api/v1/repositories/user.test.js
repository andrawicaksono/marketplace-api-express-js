const { User } = require('../../../../src/api/v1/models/user')
const { userRepository } = require('../../../../src/api/v1/repositories/user')
const { dbTest } = require('../../../../src/setup/dbTest');

const userData = {
    "email": "test@email.com",
    "username": "test",
    "password": "password",
    "full_name": "full_name"
}

beforeAll(async () => {
    await dbTest.setUp();
});

afterEach(async () => {
    await dbTest.dropCollections();
});

afterAll(async () => {
    await dbTest.dropDatabase();
});

describe("User Repository", () => {
    it("Create User Success", async () => {
        const [user, err] = await userRepository.create(userData);

        expect(user._id).toBeDefined();
        expect(user.email).toBe(userData.email);
        expect(user.username).toBe(userData.username);
        expect(user.salt).toBeDefined();
        expect(user.full_name).toBe(userData.full_name);
    });

    it("Create User Success, but the field not defined in schema", async () => {
        const [user, err] = await userRepository.create({
            ...userData,
            nickname: 'ABC'
        });

        expect(user._id).toBeDefined();
        expect(user.email).toBe(userData.email);
        expect(user.username).toBe(userData.username);
        expect(user.salt).toBeDefined();
        expect(user.full_name).toBe(userData.full_name);
        expect(user.nickname).toBeUndefined();
    });

    it("Create User without required field failed", async () => {
        const [user, err] = await userRepository.create({
            email: "email@email.com"
        });

        expect(user).toBe(null);
        expect(String(err)).toContain(String('Error'));
    });

    it("Find By Filter success", async () => {

        const newUser = new User(userData);
        await newUser.setPassword(userData.password);
        await newUser.save();

        const [user, err] = await userRepository.findByFilter({
            email: userData.email
        });

        expect(user.email).toBe(userData.email);
    });

    it("Find By Filter not Found", async () => {

        const newUser = new User(userData);
        await newUser.setPassword(userData.password);
        await newUser.save();

        const [user, err] = await userRepository.findByFilter({
            email: "notfound@email.com"
        });

        expect(user).toBe(null);
        expect(String(err)).toContain(String('Error'));
    });
});

