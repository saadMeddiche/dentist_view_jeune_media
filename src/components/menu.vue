<template>
    <div class="menu-container">
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
  .menu-container {
    margin: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    float: right;
    gap: 20px;
  }
  
  .menu-icon {
    width: 30px;
    cursor: pointer;
  }
  
  .bar {
    width: 100%;
    height: 2px;
    background-color: white;
    margin-bottom: 6px;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
  }
  
  .bar_1 {
    width: 30px;
  }
  
  .bar_2 {
    width: 40px;
  }
  
  .bar_3 {
    width: 20px;
  }
  
  .menu-items {
    width: 70%;
    padding: 5px;
    list-style: none;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    z-index: 2;
    // transform: translateX(100%);
    background-color: #B6B388;
    border: 2px solid white;
    border-radius: 5px;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    opacity: 0;
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

    @keyframes rotate-underline {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

  }
  
  .show-menu {
    // transform: translateX(0%);
    opacity: 1;
    pointer-events: all;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
  /* Small screens (sm) */
 
    .menu-icon{
        display: none;
    }
    .menu-items{
        width: 90%;
    }

    .menu-container{
        justify-content: center;
        margin: 0;
    }

  
    }
  </style>
  
  

  