import { createStore } from 'vuex'

const store = createStore({
  state: {
    modal:{
      show: false,
      message:''
    }
  },
  getters: {
  },
  mutations: {
    show_modal(state , message){
      state.modal.message = message
      state.modal.show = true
    },
    close_modal(state){
      state.modal.show = false
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store;