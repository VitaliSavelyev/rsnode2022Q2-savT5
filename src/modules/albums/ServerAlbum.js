const { RESTDataSource } = require ('apollo-datasource-rest');


class AlbumsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3005/v1/albums';
    }

    willSendRequest(request) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }

    getAlbum(id) {
        return this.get(`/${encodeURIComponent(id)}`);
    }
    async createAlbum(newAlbumData) {
        const album = await this.post('', newAlbumData);
        return album
    }
    async getAlbums(offset = 0, limit = 30) {
        const albums = await this.get('', { offset, limit });
        return albums.items;
    }
    deleteAlbum(id) {
        return this.delete(`/${encodeURIComponent(id)}`);
    }

    updateAlbum(id, updateAlbum) {
        return this.put(`/${encodeURIComponent(id)}`, updateAlbum);
    }
}

module.exports = AlbumsAPI;