const { RESTDataSource } = require ('apollo-datasource-rest');


class BandsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3003/v1/bands';
    }

    willSendRequest(request) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }

    getBand(id) {
        return this.get(`/${encodeURIComponent(id)}`);
    }
    createBand(newGenreData) {
        return this.post('', newGenreData);
    }
    async getBands(offset = 0, limit = 30) {
        const bands = await this.get('', { offset, limit });
        return bands.items;
    }
    deleteBand(id) {
        return this.delete(`/${encodeURIComponent(id)}`);
    }

    updateBand(id, updateBand) {
        return this.put(`/${encodeURIComponent(id)}`, updateBand);
    }
}

module.exports = BandsAPI