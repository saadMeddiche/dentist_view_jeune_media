<template>
  <modal></modal>
  <div class="Home">
    <!-- The title section -->
    
    <!-- The main body section -->
    <div class="body">
      <!-- Left side content -->
      <div class="left-side">
        <div class="holder_logo">
          <img class="logo" src="@/assets/img/title.png" alt="">
        </div>
      </div>

      <!-- Right side content -->
      <div class="right-side">
        <menu_01></menu_01>
        <right_content></right_content>
        <socials></socials>
      </div>
    </div>

    <!-- Custom tape component -->
    <!-- <div class="tape_holder"> -->
      <tape></tape>
    <!-- </div> -->
  </div>
  <info_popup></info_popup>
</template>


<script>
  import tape from '@/components/home/tape.vue'
  import right_content from '@/components/home/right_content.vue'
  import modal from '@/components/modal.vue';
  import info_popup from '@/components/info_popup.vue';
  import socials from '@/components/socials.vue';
  import menu_01 from '@/components/menu.vue';


  export default {
    components:{
      tape,
      right_content,
      modal,
      info_popup,
      socials,
      menu_01
    }
  }
</script>

<style lang="scss" scoped>
/* Styling for the component */
.Home {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;

  .body {
    display: flex;
    flex:1;
    height: 90%;
    .left-side {
    
      background-image: url("../assets/img/left_side.png");
      background-color: #F3F6E8;
      background-size: cover;
      background-repeat: no-repeat;


      width: 50%;

      display: flex;
      justify-content: start;

      .holder_logo{
        margin-top: 10px;
        height: 20%;
        .logo{
          width: 75%;
        }
      }
      
    }

    /* Styles for the right side */
    .right-side {
      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
     
      background-image: url("../assets/img/right_side.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;

      width: 50%; 

    }

    .right-side::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(25, 60, 53, 0.9);
      z-index: 0; 
    }
  }
}

@media (max-width: 768px) {
  /* Small screens (sm) */

  .Home {

    .body {
      height: 95%;

      .left-side {
      
        background-image: url("../assets/img/left_side.png");
        background-color: #F3F6E8;
        background-size: cover;
        background-position:-100px;
      }

      /* Styles for the right side */
      .right-side {
        background-image: url("../assets/img/right_side.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
    }
}
}

</style>

