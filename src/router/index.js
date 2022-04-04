import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/Users.vue'
import Albums from '../views/Albums.vue'
import Photos from '../views/Photos.vue'
import LikedPhotos from '../views/LikedPhotos.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/',
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
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router