<template>
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
            et de technologies avancées pour garantir des soins efficaces et confortables.</h5>
        </div>
        <email_field></email_field>
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
    .content{
        z-index: 1;
        width: 70%;

        /* Styling for the small title */
        .small_title{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 16px;
            letter-spacing: 0.1em;
            color: #B6B388;
        }

        /* Styling for the big title */
        .big_title{
            width: 55%;
            font-family: 'Philosopher';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 36px;
            color: rgba(255, 255, 255, 0.9);
        }

        /* Styling for the description */
        .description{
            width: 70%;
            font-style: normal;
            font-size: 1em;
            line-height: 16px;
            color: #FFFFFF;
        }
    }

@media (max-width: 768px) {
  /* Small screens (sm) */
  .content{
    width: 80%;
    

        .big_title{
            width: 100%;
        }

        .description{
            width: 100%;
        }
    }


  
}
</style>
