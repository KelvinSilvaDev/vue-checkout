const state = {
  initiatedCheckout: false,
  addToCartTriggered: false,
  fillAddressTriggered: false,
  addPaymentInfoTriggered: false,
  purchaseTriggered: false,
  purchaseFailTriggered: false,
  changeWindowTriggered: false,
  closeWindowTriggered: false,
};

const mutations = {
  SET_INITIATED_CHECKOUT (state, initiated) {
    state.initiatedCheckout = initiated;
  },
  SET_ADD_TO_CART (state, triggered) {
    state.addToCartTriggered = triggered;
  },
  SET_FILL_ADDRESS (state, triggered) {
    state.fillAddressTriggered = triggered;
  },
  SET_ADD_PAYMENT_INFO (state, triggered) {
    state.addPaymentInfoTriggered = triggered;
  },
  SET_PURCHASE (state, triggered) {
    state.purchaseTriggered = triggered;
  },
  SET_PURCHASE_SUCCESS (state, success) {
    state.purchaseSuccess = success;
  },
  SET_PURCHASE_FAIL (state, triggered) {
    state.purchaseFailTriggered = triggered;
  },
  SET_CHANGE_WINDOW (state, triggered) {
    state.changeWindowTriggered = triggered;
  },
  SET_CLOSE_WINDOW (state, triggered) {
    state.closeWindowTriggered = triggered;
  },
};

const actions = {
  initiateCheckout({commit}) {
    commit ('SET_INITIATED_CHECKOUT', true);
  },
  addToCart({commit}) {
    commit ('SET_ADD_TO_CART', true);
  },
  fillAddress({commit}) {
    commit ('SET_FILL_ADDRESS', true);
  },
  addPaymentInfo({commit}) {
    commit ('SET_ADD_PAYMENT_INFO', true);
  },
  purchase({commit}) {
    commit ('SET_PURCHASE', true);
  },
  purchaseFail({commit}) {
    commit ('SET_PURCHASE_FAIL', true);
  },
  changeWindow({commit}) {
    commit ('SET_CHANGE_WINDOW', true);
  },
  closeWindow({commit}) {
    commit ('SET_CLOSE_WINDOW', true);
  },
  addPaymentInfo({commit, state}) {
    commit ('SET_ADD_PAYMENT_INFO', true);

    setTimeout (() => {
      const paymentInfo = {
        cardNumber: '**** **** **** ****',
      };

      state.paymentInfo = paymentInfo;

      commit ('SET_ADD_PAYMENT_INFO', false);
    }, 1000);
  },

  purchase({commit, state}) {
    commit ('SET_PURCHASE', true);

    setTimeout (() => {
      if (state.paymentInfo) {
        commit ('SET_PURCHASE_SUCCESS', true);
      }

      commit ('SET_PURCHASE', false);
    }, 1000);
  },

  purchaseFail({commit}) {
    commit ('SET_PURCHASE_FAIL', true);

    setTimeout (() => {
      commit ('SET_PURCHASE_FAIL', false);
    }, 1000);
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
