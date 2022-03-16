<template>
    <article>
        <img :src="clickedImage" width="300" height="300">
    </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "DisplayImage",
    computed: mapGetters(['clickedImage'])
}
</script>