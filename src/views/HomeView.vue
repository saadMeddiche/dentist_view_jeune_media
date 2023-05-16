<template>
  <div class="Home">
    <!-- The main body section -->
    <div class="body">
      <!-- Left side content -->
      <div class="left-side">
        <img class="title" src="@/assets/img/title.png" alt="">
      </div>

      <!-- Right side content -->
      <div class="right-side">
        <right_content></right_content>
      </div>
        
    </div>

    <!-- Custom tape component -->
    <tape></tape>
  </div>
</template>


<script>
  import tape from '@/components/tape.vue'
  import right_content from '@/components/home/right_content.vue'

  export default {
    components:{
      tape,
      right_content,
    }
  }
</script>

<style lang="scss">
/* Styling for the component */
.Home {
  /* Make the component a flex container with a vertical layout */
  display: flex;
  flex-direction: column;
  height: 100vh;

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
      background-size: cover;

      /* Styles for the title side */
      .title{
        margin: 10px;
        width: 300px;
      }
    }

    /* Styles for the right side */
    .right-side {
      display: flex;      
      justify-content: center;
      align-items: center;
      position: relative;
      /* Make the right side take up available horizontal space */
      flex: 1;
      /* Set a background image for the right side */
      background-image: url("../assets/img/right_side.png");
      background-size: cover;
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
</style>

