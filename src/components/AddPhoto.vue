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
            const payload = {title: this.title, url: this.photoUrl, albumId: parseInt(this.albumId)}
            this.addPhoto(payload);
            this.title = '';
            this.photoUrl = '';
        }
    }
}
</script>