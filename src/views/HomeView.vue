<template>
  <div class="Home">
    <!-- The main body section -->
    <div class="body">
      <!-- Left side content -->
      <div class="left-side"></div>

      <!-- Right side content -->
      <div class="right-side"></div>
    </div>

    <!-- Custom tape component -->
    <tape></tape>
  </div>
</template>


<script>
  import tape from '@/components/tape.vue'

  export default {
    components:{
      tape
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
    }

    /* Styles for the right side */
    .right-side {
      /* Make the right side take up available horizontal space */
      flex: 1;
      /* Set a background image for the right side */
      background-image: url("../assets/img/right_side.png");
      background-size: cover;
    }
  }
}
</style>

