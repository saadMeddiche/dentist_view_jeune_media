<template>
    <!-- Container for the tape -->
    <div class="tape_container">
        <!-- Tape element -->
        <div class="tape">
            
            <!-- First part of the tape -->
            <div class="first_part">
                <!-- Headline with style_1 -->
                <div class="circle_1"></div>
                <h1 class="style_1">Notre site web officiel sera en ligne très bientôt!</h1>
                <!-- Headline with style_2 -->
                <div class="circle_2"></div>
                <h1 class="style_2">Ouverture du cabinet Février 2023.</h1>
            </div>

            <!-- Second part of the tape -->
            <div class="second_part">
                <!-- Headline with style_1 -->
                <div class="circle_1"></div>
                <h1 class="style_1">Notre site web officiel sera en ligne très bientôt!</h1>
                <!-- Headline with style_2 -->
                <div class="circle_2"></div>
                <h1 class="style_2">Ouverture du cabinet Février 2023.</h1>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
/* Styling for the tape container */
.tape_container {
    position: relative;
    width: 100%;
    height: 10vh;
    overflow: hidden;

    /* Styling for the tape */
    .tape {
        display: flex;
        position: absolute;

        /* Animation for text movement */
        animation: text_movement 20s linear infinite;
        transform: translate(0%,-50%);

        width: 200%;
        top: 50%;
        left: 0;

        /* Keyframes for text movement animation */
        @keyframes text_movement {
            0% { left: 0; }
            100% { left: -100%; }
        }

        /* Styling for the first and second of the tape */
        .first_part , .second_part{
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 50%;
            height: 100%;
        }
    }
}

/* Styling for class style_1 */
.style_1 {
    color: #193c35;
}

/* Styling for class style_2 */
.style_2 {
    color: #b6b388;
}

/* Styling for the black circle */
.circle_1 , .circle_2 {
    width: 16px;
    height: 16px;
    border-radius: 50%;
}

.circle_1{
    background-color: #193c35;
}

.circle_2{
    background-color: #b6b388;
}
</style>
