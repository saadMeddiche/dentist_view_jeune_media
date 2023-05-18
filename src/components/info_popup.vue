<template>
    <div>
      <div v-if="showPopup" class="popup">
        <span>{{ popupMessage }}</span>
        <button @click="dismiss_popup">Do not show me again</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showPopup: true,
        popupMessage: "Please adjust your screen size between 80% - 110% for better experience",
      };
    },
    mounted() {
      this.check_popup_preference();
    },
    methods: {
      dismiss_popup() {
        this.showPopup = false;
        localStorage.setItem('info_popup', 'hide');
      },
      check_popup_preference() {
        const preference = localStorage.getItem('info_popup');
        if (preference === 'hide') {
          this.showPopup = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>

  .popup {
    z-index: 3;
    position: fixed;
    bottom: 20px;
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  </style>
  