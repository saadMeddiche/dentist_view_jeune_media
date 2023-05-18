<template>
  <modal></modal>
  <div class="Home">
    <!-- The title section -->
    <div class="Title">
      <img class="logo" src="@/assets/img/title.png" alt="">
    </div>
    <!-- The main body section -->
    <div class="body">
      <!-- Left side content -->
      <div class="left-side">
      </div>

      <!-- Right side content -->
      <div class="right-side">
        <right_content></right_content>
        <socials></socials>
      </div>
    </div>

    <!-- Custom tape component -->
    <tape></tape>
  </div>
  <info_popup></info_popup>
</template>


<script>
  import tape from '@/components/home/tape.vue'
  import right_content from '@/components/home/right_content.vue'
  import modal from '@/components/modal.vue';
  import info_popup from '@/components/info_popup.vue';
  import socials from '@/components/socials.vue';
  export default {
    components:{
      tape,
      right_content,
      modal,
      info_popup,
      socials
    }
  }
</script>

<style lang="scss" scoped>
/* Styling for the component */
.Home {
  width: 100vw;
  /* Make the component a flex container with a vertical layout */
  display: flex;
  flex-direction: column;
  height: 100vh;

  .Title{

    height:10vh;
    background: linear-gradient(to right, #F3F6E8 50%, rgba(25, 60, 53, 0.9) 50%);

    /* Styles for the logo */
    .logo{
      margin: 10px;
      width: 280px;
    }
  }

  /* Styles for the main body section */
  .body {
    /* Make the body section a flex container that expands to fill the vertical space */
    display: flex;
    flex: 1;

    
    /* Styles for the left side */
    .left-side {
      /* Make the left side take up available horizontal space */
      flex: 1;
      /* Set a background image for the left side */
      background-image: url("../assets/img/left_side.png");
      background-color: #F3F6E8;
      background-size: 90% 100%;
      background-repeat: no-repeat; 
      height: 82vh; 

      
    }

    /* Styles for the right side */
    .right-side {
      display: flex;   
      flex-wrap: wrap;   
      justify-content: center;
      align-items: center;
      position: relative;
      /* Make the right side take up available horizontal space */
      flex: 1;
      /* Set a background image for the right side */
      background-image: url("../assets/img/right_side.png");
      background-size: 100% 100%;
      background-repeat: no-repeat; 
      height: 82vh; 

    }

    .right-side::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(25, 60, 53, 0.9);
      z-index: 0; /* Set a lower z-index for the color overlay */
    }
  }
}

@media (max-width: 768px) {
  /* Small screens (sm) */
  .Home{
    .Title{
      background: none;
      background-color: #F3F6E8;
      padding: 10px;
      text-align: center;
    }

    .body {

      .left-side {
        display: none;

      }
    }
  }


  
}

</style>

