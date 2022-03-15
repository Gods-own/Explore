<template>
    <div>
        <Modal v-show="showModal" @hide-modal="hideModalDiv" />
        <h3>photos</h3>
        <Button @click="onClear" >Clear All</Button>
        <div v-for="(likedItem, n) in likedItems" :key="likedItem.id">
            <article>
                <img :src="likedItem.url" width="150" height="150" :alt="likedItem.title">
                <div>
                    <Button @click="onDelete(likedItem, n)" ><i class="las la-trash"></i></Button>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
export default {
    name: "LikedPhotos",
    components: { Button, Modal },
    data () {
        return {
           likedColor: 'red',
           unlikedColor: 'black',            
           likedItems: [],
           showModal: true,           
        }
    },
    methods: {
       ...mapActions(['updatePhoto']),   
        hideModalDiv() {
        this.showModal = false
        },
        showModalDiv() {
        this.showModal = true
        },            
        removeItem(n) {
            if (n !== -1) {
                this.likedItems.splice(n, 1)
                this.saveItems();
            }
        },
        clearItems() {
            this.likedItems = []
            this.saveItems();
        },
        saveItems() {
            const parsed = JSON.stringify(this.likedItems);
            localStorage.setItem('likedItems', parsed)
        },
        onDelete(likedItem, n) {
            
            const updPhoto = {
                id: likedItem.id,
               albumId: likedItem.albumId,
               title: likedItem.title,
               url: likedItem.url,
               thumbnailUrl: likedItem.thumbnailUrl,
               liked: !likedItem.liked                
            }
           this.updatePhoto(updPhoto);            
            this.removeItem(n);
        },
        onClear() {
            this.clearItems();
        }
    },
    mounted () {
       if (localStorage.getItem('likedItems')) {
           try {
               this.likedItems = JSON.parse(localStorage.getItem('likedItems'));
               console.log(this.likedItems)
           } catch(e) {
               localStorage.removeItem('likedItems');
           }
       }   
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