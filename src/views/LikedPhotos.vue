<template>
    <div>
        <Modal v-show="showModal" @hide-modal="hideModalDiv">
            <article class="modal-content-component warning-message-modal" v-if="deleteConfirmation">
                <p>Are you sure you want to delete this picture?</p>
                <Button class="blackColor me-2 text-white" @click="hideModalDiv()" >No</Button>
                <Button class="blackColor text-white" @click="deleteItem($event); hideModalDiv();" >Yes</Button>
            </article>
            <DisplayImage v-else-if="imageModal" />
        </Modal>
        <Button class="btn my-3 text-white" style="background-color: rgba(31, 133, 81, 0.8)" @click="clearLikedItems" >Clear All</Button>
        <section class="d-flex flex-wrap justify-content-center ps-4">
            <div class="card mb-5 me-4" style="width: 18rem;" v-for="(likedItem, n) in allLikedItems" :key="likedItem.id">
                <img class="card-img-top" :src="likedItem.url" :alt="likedItem.title"  @click="showImage(likedItem.url)">
                <div class="card-body">
                    <p class="card-title">{{ likedItem.title }}</p>
                </div>
                <div  class="card-footer bg-white">
                    <Button @click="showModalDiv($event); onDelete(likedItem, n, $event);" ><i class="las la-trash"></i></Button>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
import DisplayImage from '@/components/DisplayImage.vue';
export default {
    name: "LikedPhotos",
    components: { Button, Modal, DisplayImage },
    data () {
        return {
           likedColor: 'red',
           unlikedColor: 'black',            
           showModal: false,
           deleteConfirmation: false, 
           imageModal: false,          
        }
    },
    computed: mapGetters(['allLikedItems', 'theLikedItem']),
    methods: {
       ...mapActions(['updatePhoto', 'fetchLikedItems', 'fetchLikedPhoto', 'removeLikedItem', 'clearLikedItems', 'fetchImage']),   
        hideModalDiv() {
        this.showModal = false
        },
        showModalDiv(e) {
       e.stopImmediatePropagation()
        this.showModal = true
        },            
        // removeItem(n) {
        //     this.removeLikedItem(n);
    
        // },
        // clearItems() {
        //     this.clearLikedItems();
        // },
        // saveItems() {
        //     const parsed = JSON.stringify(this.allLikedItems);
        //     localStorage.setItem('likedItems', parsed)
        // },
        onDelete(likedItem, n, e) {
            e.stopImmediatePropagation();
            this.imageModal = false
            this.deleteConfirmation = true
            this.fetchLikedPhoto({ likedPhoto: likedItem, n: n })
            // this.emitter.emit('delete-photo', { likedItem: likedItem, n: n })
        //     const updPhoto = {
        //         id: likedItem.id,
        //        albumId: likedItem.albumId,
        //        title: likedItem.title,
        //        url: likedItem.url,
        //        thumbnailUrl: likedItem.thumbnailUrl,
        //        liked: !likedItem.liked                
        //     }
        //    this.updatePhoto(updPhoto);            
        //     this.removeItem(n);
        },
        deleteItem(e) {

            e.stopImmediatePropagation();

            console.log(this.theLikedItem)
            const [likedPhoto, n] = this.theLikedItem
            const updPhoto = {
               id: likedPhoto.id,
               albumId: likedPhoto.albumId,
               title: likedPhoto.title,
               url: likedPhoto.url,
               thumbnailUrl: likedPhoto.thumbnailUrl,
               liked: !likedPhoto.liked                
            }
           this.updatePhoto(updPhoto);            
            this.removeLikedItem(n);                     
        },
        showImage(url) {
            this.deleteConfirmation = false
            this.imageModal = true
            this.fetchImage(url)
            this.showModal = true
        }
        // onClear() {
        //     this.clearItems();
        // }
    },
    mounted () {
        this.fetchLikedItems()  
    //    this.emitter.on('delete-photo', this.deleteItem);
    }
}
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