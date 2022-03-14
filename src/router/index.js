import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Users from '../views/Users.vue'
import Albums from '../views/Albums.vue'
import Photos from '../views/Photos.vue'
import LikedPhotos from '../views/LikedPhotos.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/users',
        name: 'Users',
        component: Users
    },
    {
        path: '/user-albums/:userId',
        name: 'UserAlbums',
        component: Albums
    },
    {
        path: '/album-photos/:albumId',
        name: 'AlbumPhotos',
        component: Photos
    },
    {
        path: '/favourite-photos',
        name: 'FavouritePhotos',
        component: LikedPhotos
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router