<template>
    <div class="content_holder">
        <div class="content">
             <!-- Small title -->
            <div class="small_title">
                <h4>BIENVENUE CHEZ DENTAL POINT</h4>
            </div>

            <!-- Big title -->
            <div class="big_title">
                <h1>Notre site web officiel sera en ligne très bientôt!</h1>
            </div>

            <!-- Description -->
            <div class="description">
                <h5>Notre centre de dentisterie générale offre une gamme complète de soins dentaires pour toute la famille.
                Nous disposons d'un personnel expérimenté et compétent pour fournir des soins de qualité,
                allant de la prévention à la restauration. Nous disposons également d'équipements modernes 
                et de technologies avancées pour garantir des soins efficaces et confortables.
                
                </h5>
            </div>
            <email_field></email_field>
        </div>
       
    </div>
</template>

<script>
    import email_field from '@/components/home/email.vue'

    export default{
        components:{
            email_field
        }
    }
       
   
</script>

<style lang="scss" scoped>
    .content_holder{
        height: 80%;
        position: relative;
        width: fit-content;
        z-index: 1;
        overflow: hidden;
        flex: 1;

        display: flex;
        justify-content: center;
        align-items: center;

        .content{
            width: 90%;
            height: fit-content;

            /* Styling for the small title */
            .small_title{

                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: 0.1em;
                color: #B6B388;
            }

            /* Styling for the big title */
            .big_title{
                width: 70%;
                font: 1em sans-serif;
                font-size: 12px;
                line-height: 36px;
                color: rgba(255, 255, 255, 0.9);
            }

            /* Styling for the description */
            .description{
                width: 80%;
                overflow: hidden;
                font: 1em sans-serif;
        
                line-height: 18px;
                color: #FFFFFF;

            }
        }

       
    }

    @media (max-width: 768px) {
    /* Small screens (sm) */
    .content_holder{
       

        .content{

            /* Styling for the small title */
            .small_title{

                font-size: 8px;

            }

            /* Styling for the big title */
            .big_title{
                width: 100%;
                line-height: 15px;
                font-size: 8px;
                font-weight: 900;

                h1{
                    margin: 0;
                }

            }

            /* Styling for the description */
            .description{
               font-size: 12px;
               line-height: 11px;
               width: 90%;
                h5{
                    margin-top: 10px;
                }
            }
        }

       
    }
    }
</style>
