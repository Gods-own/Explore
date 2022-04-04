const state = {
    likedItems: [],
    likedItem: [],
};

const getters = {
    allLikedItems: (state) => state.likedItems,
    theLikedItem: (state) => state.likedItem,
};

const actions = {
    fetchLikedItems({ commit }) {
        if (localStorage.getItem('likedItems')) {
            try {
                const likedPhotos = JSON.parse(localStorage.getItem('likedItems'));
                console.log(likedPhotos)
                commit('setLikedItems', likedPhotos);
            } catch (e) {
                localStorage.removeItem('likedItems');
            }
        }
    },
    removeLikedItem({ commit }, n) {
        const index = n;
        commit('deleteLikedItem', index);
    },
    removeItemwithId({ commit }, id) {
        const itemId = id;
        commit('deleteItemwithId', itemId);

    },
    clearLikedItems({ commit }) {
        const likedPhotos = []

        commit('clearAllLikedItems', likedPhotos);
    },
    addLikedItem({ commit }, likedItem) {
        const likedPhoto = likedItem;
        commit('newLikedItem', likedPhoto);
    },
    fetchLikedPhoto({ commit }, { likedPhoto, n }) {
        const likedItem = [likedPhoto, n]
        commit('setLikedPhoto', likedItem);
    }
};

const mutations = {
    setLikedItems: (state, likedItems) => (state.likedItems = likedItems),
    deleteLikedItem: (state, likedItemIndex) => {
        if (likedItemIndex !== -1) {
            state.likedItems.splice(likedItemIndex, 1)
        }
        const parsed = JSON.stringify(state.likedItems);
        localStorage.setItem('likedItems', parsed)
    },
    deleteItemwithId: (state, itemId) => {
        state.likedItems = state.likedItems.filter((likedItem) => likedItem.id !== itemId)
        const parsed = JSON.stringify(state.likedItems);
        localStorage.setItem('likedItems', parsed)
    },
    newLikedItem: (state, likedPhoto) => {
        state.likedItems.unshift(likedPhoto)
        const parsed = JSON.stringify(state.likedItems);
        localStorage.setItem('likedItems', parsed)
    },
    clearAllLikedItems: (state, allItems) => {
        state.likedItems = allItems
        const parsed = JSON.stringify(state.likedItems);
        localStorage.setItem('likedItems', parsed)
    },
    setLikedPhoto: (state, likedItem) => (state.likedItem = likedItem),
};

export default {
    state,
    getters,
    actions,
    mutations
}