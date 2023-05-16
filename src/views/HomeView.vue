<template>
  <div class="Home">
    <div class="body">
      <div class="left-side"></div>
      <div class="right-side"></div>
    </div>
    <div class="tape">
      <p>Notre site web officiel sera en ligne très bientôt!</p>
      <p>Ouverture du cabinet Février 2023.</p>
    </div>
  </div>
</template>

<script>


export default {
 
}
</script>

<style lang="scss">
.Home {
  display: flex;
  flex-direction: column;
  height: 95vh;

  .body {
    display: flex;
    flex: 1;

    .left-side {
    flex: 1;
    background-image: url("../assets/img/left_side.png");
    background-size:cover;
    background-repeat: no-repeat;
    }

    .right-side {
      flex: 1;
      background-image: url("../assets/img/right_side.png");
      background-size: cover;
    }
  }

  .tape{
    height: 5vh;
  }
}





</style>
