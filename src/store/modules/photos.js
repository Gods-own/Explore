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
    async addPhoto({ commit }, { title, url, albumId }) {
        const response = await axios.post(
            `https://jsonplaceholder.typicode.com/photos`,

            { title, url, albumId }
        );

        console.log(albumId)

        console.log(response.data)

        commit('newPhoto', response.data);
    },
    async updatePhoto({ commit }, updPhoto) {
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/photos/${updPhoto.id}`,
            updPhoto
        );

        commit('updatePhoto', response.data);
    }
};

const mutations = {
    setPhotos: (state, photos) => {
        state.photos = photos.map((photo) => {
            photo = {...photo, liked: false }
            return photo
        })
    },
    newPhoto: (state, photo) => {
        // photo.liked = false
        state.photos.unshift(photo)
    },
    updatePhoto: (state, updPhoto) => {
        const photoIndex = state.photos.findIndex((photo) => photo.id === updPhoto.id);
        if (photoIndex !== -1) {
            state.photos.splice(photoIndex, 1, updPhoto)
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}