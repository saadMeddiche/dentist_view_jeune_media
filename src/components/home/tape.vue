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

@import url('@/assets/scss/_tape.scss');

/* Styling for the tape container */
.tape_container {
    position: relative;
    width: 100%;
    height: 8vh;
    overflow: hidden;
    background-color: #F3F6E8;

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
            gap: 10px;
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

/* Styling for the circles */
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


/* Responsive styles */
@media (max-width: 768px) {
    /* Small screens (sm) */
  
    .style_1 , .style_2 {
        font-size: 0.5rem;
    }

    .circle_1 , .circle_2 {
        width: 8px;
        height: 8px;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    /* Medium screens (md) */


    .style_1 , .style_2 {
        font-size: 2rem;
    }

    .circle_1 , .circle_2 {
        width: 10px;
        height: 10px;
    }
   
}

@media (min-width: 1025px) {
    /* Large screens (lg) */
   
    .style_1, .style_2 {
        font-size: 1.8rem;
    }

}
</style>
