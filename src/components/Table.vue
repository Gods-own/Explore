<template>
    <div class="table-responsive">
        <table class="table">
        <thead>
            <tr>
            <slot name="thead"></slot>
            </tr>
        </thead>
        <tbody>
            <slot name="tbody"></slot>
        </tbody>
    </table>
    </div>
</template>

<script>
export default {
    name: "Table"
}
</script>