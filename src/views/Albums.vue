<template>
    <div>
        <h3>albums</h3>
        <div v-for="album in allUserAlbums" :key="album.id">
            <router-link :to="{ name: 'AlbumPhotos', params: { albumId: album.id } }">{{ album.title }}</router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
   name: "Albums",
   data() {
       return {
           userId: this.$route.params.userId
       }
   },
   methods: {
       ...mapActions(['fetchAlbums'])
   },
   computed: mapGetters(['allUserAlbums']),
   created() {
       this.fetchAlbums(this.userId);
   }
};
</script>