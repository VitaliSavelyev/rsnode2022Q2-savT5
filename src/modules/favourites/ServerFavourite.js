const { RESTDataSource } = require ('apollo-datasource-rest');


class FavouritesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3007/v1/favourites';
    }

    willSendRequest(request) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }

    getFavourites() {
        return this.get('');
    }

    async updateFavourite(updateType, updateData) {
        const favourites = await this.put(`/add`, { type: `${updateType}`, id: `${updateData}` });
        return favourites
    }
}

module.exports = FavouritesAPI;