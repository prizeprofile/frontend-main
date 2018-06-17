import Vue from 'vue'
import { expect } from 'chai'
import App from '../../src/components/Hello.vue'

Vue.config.productionTip = false

describe('App.vue', () => {
  it('should print hello world.', () => {
    const Compoment = Vue.extend(App)
    const vm = new Compoment().$mount()

    expect(vm.$el.querySelector('p').textContent).to.equal('Hello World')
  })
})
