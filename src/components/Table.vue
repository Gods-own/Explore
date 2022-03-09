<template>
    <table>
        <thead>
            <tr>
            <slot name="thead"></slot>
            </tr>
        </thead>
        <tbody>
            <slot name="tbody"></slot>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "Table"
}
</script>