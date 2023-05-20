<template>
    <!-- Container for the tape -->
    <div class="tape_container">
        <!-- Tape element -->
        <div class="tape">
            
            <!-- First part of the tape -->
            <div class="first_part">
                <div class="circle_1"></div>
                <div>
                    <h1 class="style_1">Notre site web officiel sera en ligne très bientôt!</h1>
                </div>
                <div class="circle_2"></div>
                <div>
                    <h1 class="style_2">Ouverture du cabinet Février 2023.</h1>
                </div>
            </div>

            <!-- Second part of the tape -->
            <div class="second_part">
                <div class="circle_1"></div>
                <div>
                    <h1 class="style_1">Notre site web officiel sera en ligne très bientôt!</h1>
                </div>
                <div class="circle_2"></div>
                <div>
                    <h1 class="style_2">Ouverture du cabinet Février 2023.</h1>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>


/* Styling for the tape container */
.tape_container {
    position: relative;
    height: 10%;
    overflow: hidden;
    background-color: #F3F6E8;

    /* Styling for the tape */
    .tape {
        display: flex;
        justify-content: space-around;
        gap: 10px;
        position: absolute;

        /* Animation for text movement */
        animation: text_movement 20s linear infinite;
        transform: translate(0%,-50%);

        width: 200%;
        top: 50%;

        /* Keyframes for text movement animation */
        @keyframes text_movement {
            0% { left: -100%; }
            100% { left: 0%; }
        }

        /* Styling for the first and second of the tape */
        .first_part , .second_part{
            white-space: nowrap;
            display: flex;
            justify-content: space-around;
            gap: 10px;
            align-items: center;
            width: 100%;

            font-size: small;
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
  
    .tape_container{
        height: 5%;
        .tape{
            .first_part , .second_part{
                 
                font-size: 5px;
            }
    
        }
    }

    .circle_1 , .circle_2 {
        width: 8px;
        height: 8px;
    }
}


</style>
