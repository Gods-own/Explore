<template>
    <button class="btn" @click="onClick($event)">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    methods: {
        onClick(e) {
            e.stopImmediatePropagation();
            this.$emit('click', e)
        }
    }
}
</script>