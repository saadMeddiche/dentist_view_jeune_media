<template>
    <div class="menu_holder">
      <div class="menu">
          <div class="menu-items" :class="{ 'show-menu': showMenu }">
            <li v-for="item in menuItems" :key="item.id" @click="navigate(item.route)">
              {{ item.label }}
            </li>
          </div>
          <div class="menu-icon" @click="toggle_menu">
            <div class="bar bar_1"></div>
            <div class="bar bar_2"></div>
            <div class="bar bar_3"></div>
          </div>
      </div>
      
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        showMenu: true,
        menuItems: [
          { id: 1, label: "Accueil", route: "/accueil" },
          { id: 2, label: "Contactez-nous", route: "/contact" },
          { id: 3, label: "À propos", route: "/apropos" }
        ]
      };
    },
    methods: {
      toggle_menu() {
        this.showMenu = !this.showMenu;
      },
      navigate(route) {
        //Logic of navigiatio here
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .menu_holder {
    height: 15%;
    width: 100%;

    display: flex;
    flex-direction: row-reverse;    justify-content: end;
    
   
    gap: 20px;

    position: relative;
    z-index: 4;

    .menu{
      float: right;
      .show-menu {
      // transform: translateX(0%);
        opacity: 1;
        pointer-events: all;
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
      }
      .menu-icon {
        width: 30px;
        margin: 20px;

        cursor: pointer;
        transform: rotate(180deg);
        .bar {
         
          height: 2px;
          background-color: white;
          margin-bottom: 6px;
          transition: background-color 0.3s ease-in-out;
          cursor: pointer;
        }
        .bar_1 {
          width: 20px;
        }
        
        .bar_2 {
          width: 40px;
        }
        
        .bar_3 {
          width: 30px;
        }
      }
      
    .menu-items {
      width: 70%;
      padding: 5px;
      list-style: none;
      display: none;
      align-items: flex-end;
      justify-content: space-around;
      background-color: #B6B388;
      border: 2px solid white;
      border-radius: 5px;
      transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
      opacity: 1;
      pointer-events: none;

      li {
          color: white;
          text-decoration: underline #193C35 2px;
          position: relative;
          cursor: pointer;

          &:hover,&:focus {
              animation: rotate-underline 1s;
          }
      }

      

    }
    }
  }

  @keyframes rotate-underline {
          0% {
              transform: rotate(0deg);
          }
          100% {
              transform: rotate(360deg);
          }
      }

  

  
 
  
  


  @media (max-width: 768px) {
  /* Small screens (sm) */
 
   
    .menu-items{
      position: fixed;
      top: 15%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 9999;
      width: 80%;
      li{
        font-size: 10px;
      }
    }

    .menu-container{
      position: relative;
      top: 40%;
      justify-content: center;
      flex-direction:column-reverse;
      margin: 0;
    }

  
    }
  </style>
  
  

  