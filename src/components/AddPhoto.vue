<template>
    <div>
        <form @submit="onSubmit">
            <div>
                <label>Photo url</label>
                <input type="url" v-model="photoUrl">
            </div>
             <div>
                <label>Title</label>
                <input type="text" v-model="title">
            </div>
            <button>Submit</button>            
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "AddPhoto",
    data() {
        return {
            title: '',
            photoUrl: '',
            albumId: this.$route.params.albumId
        }
    },
    methods: {
        ...mapActions(['addPhoto']),
        onSubmit(e) {
            e.preventDefault();
            this.addPhoto(this.albumId, this.title, this.photoUrl);
        }
    }
}
</script>