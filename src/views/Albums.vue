<template>
    <div class="my-4">
        <h2 class="text-center fw-bold">Albums</h2>
        <ol class="list-group list-group-numbered">
            <li class="list-group-item" v-for="album in allUserAlbums" :key="album.id">
                {{ album.title }}
                <Button class="greenColor float-end">
                    <router-link class="text-decoration-none text-white" :to="{ name: 'AlbumPhotos', params: { albumId: album.id } }">Explore</router-link>
                </Button>
                <div class="clearfix"></div>
            </li>
        </ol>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Button from '@/components/Button.vue'
export default {
   name: "Albums",
   components: {
       Button
   },
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