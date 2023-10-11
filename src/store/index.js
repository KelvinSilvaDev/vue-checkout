import Vue from 'vue'
import Vuex from 'vuex'
import checkout from './checkout'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    checkoutData: {
      initiated: false,
    },
    addressData: {
      street: "",
      neighborhood: "",
      city: "",
      state: "",
      number: "",
      cep: "",  
    },
  },
  mutations: {
    SET_CHECKOUT_DATA(state, data) {
      state.checkoutData = data;
    },
    SET_ADDRESS_DATA(state, data) {
      state.addressData = data;
    },
  },
  actions: {
  },
  modules: {
    checkout, 
  }
})
