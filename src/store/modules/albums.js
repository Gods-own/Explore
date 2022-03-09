import axios from 'axios';

const state = {
    albums: []
};

const getters = {
    allUserAlbums: (state) => state.albums
};

const actions = {
    async fetchAlbums({ commit }, userId) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);

        commit('setAlbums', response.data);
    }
};

const mutations = {
    setAlbums: (state, albums) => (state.albums = albums)
};

export default {
    state,
    getters,
    actions,
    mutations
}