<template>
    <div>
        <h3>photos</h3>
        <AddPhoto />
        <div v-for="photo in allAlbumPhotos" :key="photo.id">
            <img :src="photo.url" width="150" height="150">
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddPhoto from '@/components/AddPhoto.vue'
export default {
   name: "Photos",
   components: {AddPhoto},
   data() {
       return {
           albumId: this.$route.params.albumId
       }
   },
   methods: {
       ...mapActions(['fetchPhotos'])
   },
   computed: mapGetters(['allAlbumPhotos']),
   created() {
       this.fetchPhotos(this.albumId);
   }
};
</script>