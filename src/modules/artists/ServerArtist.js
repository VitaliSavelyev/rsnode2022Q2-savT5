const { RESTDataSource } = require ('apollo-datasource-rest');


class ArtistsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3002/v1/artists';
    }

    willSendRequest(request) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }

    getArtist(id) {
        return this.get(`/${encodeURIComponent(id)}`);
    }
    async createArtist(newArtistData) {
        const artist = await this.post('', newArtistData);
        return artist
    }
    async getArtists(offset = 0, limit = 30) {
        const artists = await this.get('', { offset, limit });
        return artists.items;
    }
    deleteArtist(id) {
        return this.delete(`/${encodeURIComponent(id)}`);
    }

    updateArtist(id, updateBand) {
        return this.put(`/${encodeURIComponent(id)}`, updateBand);
    }
}

module.exports = ArtistsAPI