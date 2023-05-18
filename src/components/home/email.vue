<template>
    <div class="Email">
        <div class="description">
          <p>Vous souhaitez être tenu(e) au courant de l’ouverture du cabinet?</p>
        </div>
          <div class="input_holder">
              <input type="text" placeholder="Votre adresse mail" v-model="email">
              <button @click="when_send_button_is_clicked()">
                  <div>
                      <svg viewBox="0 5 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      </svg>

                  </div>
              </button>
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

        // Verify if the email is realy exist ot not
        if(await verify_email(this.email) != 'valid'){
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
.Email {
  z-index: 1;
  .description{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    /* identical to box height */


    color: #FFFFFF;
  }
  .input_holder {
    button {
      padding: 10px;
      background-color: #f3f6e8;
      border-radius: 0 25px 25px 0;
      border: none;

  
      div {
        padding: 10px;
        border-radius: 25px;
        background-color: rgba(25, 60, 53, 0.9);
        cursor: pointer;
        height: 100%;
        

        svg {
            top: 50%;
            right: 50%;
            bottom: 50%;
            left: 50%;
            width: 20px;
            // height: 20px;

        }
      }
    }

    input {
      width: 50%;
      padding: 20px;
      background-color: #f3f6e8;
      border-radius: 25px 0 0 25px;
      border: none;

      &::placeholder {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
        color: rgba(25, 60, 53, 0.9);
      }

    }
  }
}

@media (max-width: 768px) {
  /* Small screens (sm) */
  .Email {
    width: 100%;
  .description{
    width: 100%;
  }
  .input_holder {
   
    input {
      width: 60%;
      
    }
  }
}

  
}
</style>


