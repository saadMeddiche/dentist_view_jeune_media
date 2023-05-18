<template>
   <div class="socials">
    <div class="facebook">
        <a href="https://www.facebook.com/">
            <img src="@/assets/img/fb.png" alt="Facebook">
        </a>
    </div>
    <div class="instagram">
        <a href="https://www.instagram.com/">
            <img src="@/assets/img/ins.png" alt="Instagram">
        </a>
    </div>
</div>

</template>

<script>

</script>
<style lang="scss" scoped>
    .socials{
        width: 100%;
        height: 5vh;

        margin: 10px;
        margin-right: 40px;

        display: flex;
        justify-content: end;

        gap: 30px;
        z-index: 2;

        .facbook , .instagram{
            cursor: pointer;
        }
    }
</style>