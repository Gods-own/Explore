import axios from 'axios';

const state = {
    photos: []
};

const getters = {
    allAlbumPhotos: (state) => state.photos
};

const actions = {
    async fetchPhotos({ commit }, albumId) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)

        console.log(response.data)

        commit('setPhotos', response.data)
    },
    async addPhoto({ commit }, {title, url, albumId}) {
        const response = await axios.post(
            `https://jsonplaceholder.typicode.com/photos`,

            { title, url, albumId }
        );

        console.log(albumId)

        console.log(response.data)

        commit('newPhoto', response.data);
    }
};

const mutations = {
    setPhotos: (state, photos) => (state.photos = photos),
    newPhoto: (state, photo) => state.photos.unshift(photo)
};

export default {
    state,
    getters,
    actions,
    mutations
}