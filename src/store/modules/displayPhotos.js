const state = {
    imageUrl: ''
};

const getters = {
    clickedImage: (state) => state.imageUrl
};

const actions = {
    fetchImage({ commit }, url) {
        const photoUrl = url;
        commit('setImageUrl', photoUrl)
    }
};

const mutations = {
    setImageUrl: (state, photoUrl) => (state.imageUrl = photoUrl)
};

export default {
    state,
    getters,
    actions,
    mutations
}