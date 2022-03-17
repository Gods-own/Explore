<template>
    <div>
        <Modal v-show="showModal" @hide-modal="hideModalDiv">
            <article v-if="deleteConfirmation">
                <p>Are you sure you want to delete this message?</p>
                <Button @click="hideModalDiv()" >No</Button>
                <Button @click="deleteItem($event); hideModalDiv();" >Yes</Button>
            </article>
            <DisplayImage v-else-if="imageModal" />
        </Modal>
        <h3>photos</h3>
        <Button @click="clearLikedItems" >Clear All</Button>
        <div v-for="(likedItem, n) in allLikedItems" :key="likedItem.id">
            <article>
                <img :src="likedItem.url" width="150" height="150" :alt="likedItem.title"  @click="showImage(likedItem.url)">
                <div>
                    <Button @click="showModalDiv($event); onDelete(likedItem, n, $event);" ><i class="las la-trash"></i></Button>
                </div>
            </article>
        </div>
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