<template>
    <button @click="onClick($event)">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    methods: {
        onClick(e) {
            this.$emit('click', e)
        }
    }
}
</script>