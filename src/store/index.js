import { createStore } from 'vuex';
import users from './modules/users';
import albums from './modules/albums';
import photos from './modules/photos';

export default createStore({
    modules: {
        users,
        albums,
        photos
    }
});