const state = {
    imageUrl: ''
};

const getters = {
    clickedImage: (state) => state.imageUrl
};

const actions = {
    fetchImage({ commit }, url) {
        const url = url;
        commit('setImageUrl', url)
    }
};

const mutations = {
    setImageUrl: (state, url) => (state.imageUrl = url)
};