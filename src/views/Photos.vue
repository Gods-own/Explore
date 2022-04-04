<template>
    <div>
        <Modal v-show="showModal" @hide-modal="hideModalDiv">
            <DisplayImage />
        </Modal>
        <AddPhoto />
        <section class="d-flex flex-wrap justify-content-center ps-4">
            <div class="card mb-5 me-4" style="width: 18rem;" v-for="(photo) in allAlbumPhotos" :key="photo.id" @click="fetchImage(photo.url)">
            <!-- <div style="width: 18rem;"> -->
                <img class="card-img-top" :src="photo.url" :alt="photo.title" @click="showImage(photo.url)">
                <div class="card-body">
                    <p class="card-title">{{ photo.title }}</p>
                </div>
                <div class="card-footer bg-white">
                    <Button :class="[ photo.liked ? likedColor : unlikedColor ]" @click="onLike(photo)"><i class="las la-heart"></i></Button>
                </div>
            </div>
            <!-- </div> -->
        </section>
            <!-- <article>
                <img :src="photo.url" width="150" height="150" :alt="photo.title" @click="showImage(photo.url)">
                <div>
                    <Button :class="[ photo.liked ? likedColor : unlikedColor ]" @click="onLike(photo)"><i class="las la-heart"></i></Button>
                </div>
            </article> -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddPhoto from '@/components/AddPhoto.vue'
import Button from '@/components/Button.vue'
import Modal from '@/components/Modal.vue'
import DisplayImage from '@/components/DisplayImage.vue'
export default {
   name: "Photos",
   components: {AddPhoto, Button, Modal, DisplayImage},
   data() {
       return {
           albumId: this.$route.params.albumId,
           likedColor: 'red',
           unlikedColor: 'black',
           showModal: false,

       }
   },
   computed: mapGetters(['allAlbumPhotos', 'allLikedItems']),
   methods: {
       ...mapActions(['fetchPhotos', 'updatePhoto', 'fetchLikedItems', 'removeItemwithId', 'addLikedItem', 'fetchImage']),
    //    addPhoto(photo) {
    //        if(!photo) {
    //            return;
    //        }

    //        this.likedItems.push(photo)
    //        this.savePhotos();
    //    },
    //    removePhoto(id) {
    //     if (n !== -1) {
    //         console.log(this.likedItems)
    //        this.likedItems.splice(n, 1);
    //        console.log(this.likedItems)
    //        console.log(n)
    //        this.savePhotos();
    //     }  
    //     console.log(this.likedItems)
    //     this.likedItems = this.likedItems.filter((likedItem) => likedItem.id !== id)  
    //     this.savePhotos();
    //     console.log(this.likedItems)       
    //    },
    //    savePhotos() {
    //        const parsed = JSON.stringify(this.likedItems);
    //        localStorage.setItem('likedItems', parsed);
    //    },
        hideModalDiv() {
            this.showModal = false
        },
        showModalDiv(e) {
            e.stopImmediatePropagation()
            this.showModal = true
        }, 
       onLike(photo) {
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
               this.addLikedItem(updPhoto);
           }
           else if(updPhoto.liked === false) {
               this.removeItemwithId(photo.id);
           }
           console.log(updPhoto.liked)
       },
       showImage(url) {
        console.log(url)
        this.fetchImage(url)
        this.showModal = true
     },   
   },
   created() {
           this.fetchPhotos(this.albumId);        
   },
   mounted() {
        this.fetchLikedItems()
       setTimeout(() => {
                  this.allLikedItems.forEach((likedItem) => {
            this.allAlbumPhotos.forEach((allAlbumPhoto) => {
                if (likedItem.id === allAlbumPhoto.id) {
                    const updPhoto = {
                        id: allAlbumPhoto.id,
                        albumId: allAlbumPhoto.albumId,
                        title: allAlbumPhoto.title,
                        url: allAlbumPhoto.url,
                        thumbnailUrl: allAlbumPhoto.thumbnailUrl,
                        liked: likedItem.liked
                    }                    
                    this.updatePhoto(updPhoto);
                }
            })           
       })
       }, 800)
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