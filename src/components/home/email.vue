<template>
    <div class="Email">
        <div class="description">
          <p>Vous souhaitez être tenu(e) au courant de l’ouverture du cabinet?</p>
        </div>
        <div class="input-container">
          <input type="email" placeholder="Votre adresse mail" v-model="email">
          <button @click="when_send_button_is_clicked()"> <svg viewBox="0 5 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                              <g clip-path="url(#clip0_429_11051)">
                                  <path d="M5 12L4.39589 6.56299C4.22297 5.0067 5.82469 3.86433 7.23983 4.53465L19.1842 10.1925C20.7093 10.9149 20.7093 13.0851 19.1842 13.8075L7.23983 19.4653C5.82469 20.1357 4.22297 18.9933 4.39589 17.437L5 12ZM5 12H12" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                              </g> 
                              <defs> 
                                  <clipPath id="clip0_429_11051">
                                      <rect width="24" height="24" fill="white"></rect>
                                  </clipPath>
                              </defs>
                          </g>
                      </svg></button>
        </div>
    </div>
</template>
<script>
  import {send_message , clear_email_field, verify_email , validate_email} from '@/utils/Email'

  export default{
    data(){
      return{
        email:'',
      }
    },
    methods:{
      async when_send_button_is_clicked(){

        // Validate the format of email
        if(validate_email(this.email) != 'verified'){
          return;
        }

        // Send Message to that eamil
        send_message(this.email , 'You Will Be Notified When The Dentist Is Open :)')

        // Clear The field Of Email
        clear_email_field(this)
      }
    }
  }
</script>
<style lang="scss" scoped>




  .Email{
    .description{
      color: white;
      font-size: 14px;
    }
    .input-container {
      position: relative;
      // display: inline-block;

      input{
        width: 80%;
        height: fit-content;
        border: none;
        border-radius: 25px 25px;
        padding: 20px;
        &::placeholder{
          font-size: 14px;
          color: #193C35;
        }
      }

      button {
        position: absolute;
        top: 5px;
        right: 15%;
        height: 80%;
        min-width: 40px;
        border: none;
        border-radius: 50%;
        background-color: #193C35;

        svg{
          position: absolute;
          top: 35%;
          right: 18.5%;
          width: 25px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    /* Small screens (sm) */
    .Email{
    .description{
      color: white;
      font-size: 4px;
    }
    .input-container {
      position: relative;
      display: inline-block;

      input{
        width: 100%;
        height: fit-content;
        border: none;
        border-radius: 25px 25px;
        padding: 4px;
        &::placeholder{
          font-size: 10px;
          font-weight: bold;
          color: #193C35;
        }
      }

      button {
        position: absolute;
        top: 3px;
        right: 0;
        height: 80%;
        min-width: 20px;
        border: none;
        border-radius: 50%;
        background-color: #193C35;

        svg{
          position: absolute;
          top: 35%;
          right: 25%;
          width: 10px;
        }
      }
    }
  }
}
</style>


