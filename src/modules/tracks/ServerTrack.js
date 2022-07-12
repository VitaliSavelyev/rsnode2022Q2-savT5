const { RESTDataSource } = require ('apollo-datasource-rest');


class TracksAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3006/v1/tracks';
    }

    willSendRequest(request) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }

    getTrack(id) {
        return this.get(`/${encodeURIComponent(id)}`);
    }
    createTrack(newTrackData) {
        return this.post('', newTrackData);
    }
    async getTracks(offset = 0, limit = 10) {
        const tracks = await this.get('', { offset, limit });
        return tracks.items;
    }
    deleteTrack(id) {
        return this.delete(`/${encodeURIComponent(id)}`);
    }

    updateTrack(id, updateTrack) {
        return this.put(`/${encodeURIComponent(id)}`, updateTrack);
    }
}

module.exports = TracksAPI