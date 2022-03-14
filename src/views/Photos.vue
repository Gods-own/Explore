<template>
    <div>
        <h3>photos</h3>
        <AddPhoto />
        <div v-for="(photo, n) in allAlbumPhotos" :key="photo.id">
            <article>
                <img :src="photo.url" width="150" height="150" :alt="photo.title">
                <div>
                    <Button :class="[ photo.liked ? likedColor : unlikedColor ]" @click="onLike(photo, n)"><i class="las la-heart"></i></Button>
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
           likedColor: 'red',
           unlikedColor: 'black',
           likedItems: [],

       }
   },
   computed: mapGetters(['allAlbumPhotos']),
   methods: {
       ...mapActions(['fetchPhotos', 'updatePhoto']),
       addPhoto(photo) {
           if(!photo) {
               return;
           }

           this.likedItems.push(photo)
           this.savePhotos();
       },
       removePhoto(n) {
        if (n !== -1) {
            console.log(this.likedItems)
           this.likedItems.splice(n, 1);
           console.log(this.likedItems)
           console.log(n)
           this.savePhotos();
        }           
       },
       savePhotos() {
           const parsed = JSON.stringify(this.likedItems);
           localStorage.setItem('likedItems', parsed);
       },
       onLike(photo, n) {
           const updPhoto = {
               id: photo.id,
               albumId: photo.albumId,
               title: photo.title,
               url: photo.url,
               thumbnailUrl: photo.thumbnailUrl,
               liked: !photo.liked
           }

           this.updatePhoto(updPhoto);

           if(updPhoto.liked === true) {
               this.addPhoto(updPhoto);
           }
           else if(updPhoto.liked === false) {
               this.removePhoto(n);
           }
           console.log(updPhoto.liked)
       }
   },
   created() {
       this.fetchPhotos(this.albumId);
   },
   mounted() {
       if (localStorage.getItem('likedItems')) {
           try {
               this.likedItems = JSON.parse(localStorage.getItem('likedItems'));
           } catch(e) {
               localStorage.removeItem('likedItems');
           }
       }
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