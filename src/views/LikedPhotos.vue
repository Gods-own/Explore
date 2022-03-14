<template>
    <div>
        <h3>photos</h3>
        <div v-for="(likedItem, n) in likedItems" :key="likedItem.id">
            <article>
                <img :src="likedItem.url" width="150" height="150" :alt="likedItem.title">
                <div>
                    <Button><i class="las la-trash"></i></Button>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
    name: "LikedPhotos",
    components: { Button },
    data () {
        return {
           likedColor: 'red',
           unlikedColor: 'black',            
          likedItems: []
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