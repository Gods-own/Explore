<template>
<form @submit="onSubmit" class="my-3 form mx-auto">
  <div class="mb-3">
    <label for="photoUrl" class="form-label">Photo url</label>
    <input type="url" class="form-control" id="photoUrl" v-model="photoUrl">
  </div>
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" id="title" v-model="title">
  </div>
  <div class="text-center btn-div">
      <button type="submit" class="btn btn-primary">Submit</button>
 </div>
</form>
    <!-- <div>
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
    </div> -->
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