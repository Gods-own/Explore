<template>
    <div>
        <Modal v-show="showModal" @hide-modal="hideModalDiv" />
        <h3>photos</h3>
        <Button @click="clearLikedItems" >Clear All</Button>
        <div v-for="(likedItem, n) in allLikedItems" :key="likedItem.id">
            <article>
                <img :src="likedItem.url" width="150" height="150" :alt="likedItem.title">
                <div>
                    <Button @click="showModalDiv(); onDelete(likedItem, n);" ><i class="las la-trash"></i></Button>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
export default {
    name: "LikedPhotos",
    components: { Button, Modal },
    data () {
        return {
           likedColor: 'red',
           unlikedColor: 'black',            
           showModal: false,           
        }
    },
    computed: mapGetters(['allLikedItems']),
    methods: {
       ...mapActions(['updatePhoto', 'fetchLikedItems', 'fetchLikedPhoto', 'removeLikedItem', 'clearLikedItems']),   
        hideModalDiv() {
        this.showModal = false
        },
        showModalDiv() {
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
        onDelete(likedItem, n) {
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