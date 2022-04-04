<template>
    <div class="modal-component" @click="onClick($event)" >
        <!-- <div class="modal-content-component"> -->
        <slot></slot>
            <!-- <article>
                <p>Are you sure you want to delete this message?</p>
                <Button @click="onClick($event)" >No</Button>
                <Button @click="deleteItem($event); onClick($event);" >Yes</Button>
            </article> -->
        <!-- </div> -->
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Button from './Button.vue'
export default {
    name: 'Modal',
    components: { Button },
    computed: mapGetters(['theLikedItem']),
    methods: {
       ...mapActions(['updatePhoto', 'removeLikedItem']),  
        removeItem(n) {
            if (n !== -1) {
                this.likedItems.splice(n, 1)
                this.saveItems();
            }
        },
        saveItems() {
            const parsed = JSON.stringify(this.likedItems);
            localStorage.setItem('likedItems', parsed)
        },               
        onClick(e) {
            e.stopImmediatePropagation()
            this.$emit('hideModal', e)
        },
        // clickedYes(e) {
        //     e.stopImmediatePropagation()
        //     this.$emit('showModal', e)
        // }, 
        // deleteItem(e) {
        //     e.stopImmediatePropagation()

        //     console.log(this.theLikedItem)
        //     const [likedPhoto, n] = this.theLikedItem
        //     const updPhoto = {
        //        id: likedPhoto.id,
        //        albumId: likedPhoto.albumId,
        //        title: likedPhoto.title,
        //        url: likedPhoto.url,
        //        thumbnailUrl: likedPhoto.thumbnailUrl,
        //        liked: !likedPhoto.liked                
        //     }
        //    this.updatePhoto(updPhoto);            
        //     this.removeLikedItem(n);            
        //     this.$emit('showModal', e)

        // },  
        // deleteItem({ likedItem, n }) {
        //     const updPhoto = {
        //        id: likedItem.id,
        //        albumId: likedItem.albumId,
        //        title: likedItem.title,
        //        url: likedItem.url,
        //        thumbnailUrl: likedItem.thumbnailUrl,
        //        liked: !likedItem.liked                
        //     }
        //    this.updatePhoto(updPhoto);            
        //     this.removeItem(n);            
        // } 
    },
    emits: ['hideModal', 'showModal'],
    mounted() {
       if (localStorage.getItem('likedItems')) {
           try {
               this.likedItems = JSON.parse(localStorage.getItem('likedItems'));
               console.log(this.likedItems)
           } catch(e) {
               localStorage.removeItem('likedItems');
           }
       }
       
    //    this.emitter.on('delete-photo', this.deleteItem);
    },
    // beforeUnmount() {
    //     this.emitter.off('delete-photo', this.deleteItem);
    // }
}
</script>

<style scoped>
.modal-component {
    position: fixed; 
    z-index: 200; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    cursor: pointer;
    background-color: rgba(0,0,0,0.4); 
  }
  
</style>