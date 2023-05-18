<template>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="close_Modal">&times;</span>
        <p>{{ modalMessage }}</p>
      </div>
    </div>
</template>
  
<script>
    export default {
    watch:{
        modal_status(){

            if(this.$store.state.modal.show == true){
                this.show_Modal(this.$store.state.modal.message)
            }

            if(this.$store.state.modal.show == false){
                this.close_Modal()
            }
        }
    },
    data() {
        return {
            showModal: false,
            modalMessage: ''
        };
    },
    methods: {
        show_Modal(message) {
            this.modalMessage = message;
            this.showModal = true;
        },
        close_Modal() {
            this.$store.commit('close_modal')
            this.showModal = false;
        }
    },
    computed:{
        modal_status(){
            return this.$store.state.modal.show
        }
    }
    };
</script>
  
<style lang="scss" scoped>


$primaryColor: #193c35;
$seconderyColor: #b6b388;

.modal {
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);

  .modal-content {
    background-color: white;
    margin: 15% auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    width: 50%;

    p {
      margin: 0;
      color: $primaryColor;
      font-weight: bold;
      font-size: 18px;
    }

    .close {
        color: $seconderyColor;
        float: right;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: lighten($seconderyColor, 10%);
        margin-top: -10px;
        &:hover,
        &:focus {
            color: darken($seconderyColor, 10%);
            background-color: $seconderyColor;
            text-decoration: none;
            cursor: pointer;
        }
    }
  }
}
</style>
  