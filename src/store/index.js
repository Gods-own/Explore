import { createStore } from 'vuex';
import users from './modules/users';
import albums from './modules/albums';
import photos from './modules/photos';
import likedPhotos from './modules/likedPhotos';
import displayPhotos from './modules/displayPhotos';

export default createStore({
    modules: {
        users,
        albums,
        photos,
        likedPhotos,
        displayPhotos
    }
});