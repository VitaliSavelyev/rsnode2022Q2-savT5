const { RESTDataSource } = require('apollo-datasource-rest');

class UsersAPI extends RESTDataSource {
    constructor() {
        // Always call super()
        super();
        // Sets the base URL for the REST API
        this.baseURL = 'http://localhost:3004/v1/users';
    }

    async getUser(id)
    {
        const user = await this.get(`/${encodeURIComponent(id)}`);
        user.id = user._id
        return user
    }

    async registerUser(userData) {
        const newUser = await this.post(`/register`, { ...userData })
        newUser.id = newUser._id
        return newUser
    }

    async getJWT(userData) {
        console.log({ ...userData })
        const data = await this.post(`/login`, {...userData})
        console.log(data)
        return data
    }
}

module.exports = UsersAPI