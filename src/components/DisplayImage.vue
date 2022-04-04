<template>
        <img class="modal-content-component image-modal" :src="clickedImage">
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "DisplayImage",
    computed: mapGetters(['clickedImage'])
}
</script>

<style scoped>
img{
    width: 100%;
}
</style>