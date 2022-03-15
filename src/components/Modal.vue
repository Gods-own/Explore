<template>
    <div class="modal" @click="onClick($event)" >
        <div class="modal-content">
            <article>
                <p>Are you sure you want to delete this message?</p>
                <Button @click="onClick($event)" >No</Button>
                <Button @click="deleteItem($event)" >Yes</Button>
            </article>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'
export default {
    name: 'Modal',
    components: { Button },
    methods: {
        onClick(e) {
            e.stopImmediatePropagation()
            this.$emit('hideModal', e)
        },  
        deleteItem(e) {
            this.$emit('delete', e)
        } 
    },
    emits: ['hideModal']
}
</script>

<style scoped>
.modal {
    position: fixed; 
    z-index: 200; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    cursor: pointer;
    background-color: rgba(0,0,0,0.4); 
  }
  
  .modal-content {
    position: relative;
    background-color: #fff;
    margin: auto;
    padding: 0;
    width: 320px;
    border-radius: 10px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;

  }
</style>