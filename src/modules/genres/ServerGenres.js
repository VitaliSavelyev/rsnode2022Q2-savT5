const { RESTDataSource } = require ('apollo-datasource-rest');

class GenresAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3001/v1/genres';
    }

    willSendRequest(request) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }

    async getGenre(id) {
        const genre = await this.get(`/${encodeURIComponent(id)}`)
        return genre;
    }
    createGenre(newGenreData) {
        return this.post('', newGenreData);
    }
    async getGenres(offset = 0, limit = 3) {
        const genres = await this.get('', { offset, limit });
        return genres.items;
    }
    deleteGenre(id) {
        return this.delete(`/${encodeURIComponent(id)}`);
    }

    updateGenre(id, updateGenre) {
        return this.put(`/${encodeURIComponent(id)}`, updateGenre);
    }
}

module.exports = GenresAPI
