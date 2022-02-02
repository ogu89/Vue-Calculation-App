import { createStore } from 'vuex'

export default createStore({
  state: {
    input: 'dfdfsdfsdfsdffd'
  },
  mutations: {
    inputOperand(state, operand){
      state.input += operand
    }
  },
  actions: {
  },
  modules: {
  }
})
