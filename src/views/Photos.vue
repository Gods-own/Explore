<template>
    <div>
        <h3>photos</h3>
        <AddPhoto />
        <div v-for="(photo, index) in allAlbumPhotos" :key="photo.id">
            <article>
                <img :src="photo.url" width="150" height="150" :alt="photo.title">
                <div>
                    <Button :class="[ isLiked ? liked : unliked ]" @click="onLike(photo.id)"><i class="las la-heart"></i></Button>
                    <Button><i class="las la-trash"></i></Button>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddPhoto from '@/components/AddPhoto.vue'
import Button from '@/components/Button.vue'
export default {
   name: "Photos",
   components: {AddPhoto, Button},
   data() {
       return {
           albumId: this.$route.params.albumId,
           isLiked: false,
           liked: 'red',
           unliked: 'black',
           likedphoto: [],

       }
   },
   computed: mapGetters(['allAlbumPhotos']),
   methods: {
       ...mapActions(['fetchPhotos']),
       onLike(id) {
           this.likedphoto = this.allAlbumPhotos.filter((photo) => photo.id === id) 
           console.log(this.likedphoto)
           this.isLiked = !this.isLiked;
           console.log(this.isLiked)
           console.log(this.allAlbumPhotos)
       }
   },
   created() {
       this.fetchPhotos(this.albumId);
   }
};
</script>

<style scoped>
i {
  font-size: 32px;
}
.black {
    color: black;
}
.red {
    color: red;
}
</style>