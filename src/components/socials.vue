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
        height: 5%;
        position: relative;
        margin: 10px;
        display: flex;
        justify-content: end;

        gap: 30px;
        z-index: 2;

        .facebook , .instagram{
            cursor: pointer;
        }
    }
</style>