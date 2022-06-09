import {mount, createLocalVue} from '@vue/test-utils'
import HomePage from '@/page/HomePage.vue'
import VueI18n from 'vue-i18n'
import store from '@/store'
import '@/initializers/vee-validate.js'
const flushPromises = require('flush-promises')

const localVue = createLocalVue()
localVue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      title: 'Hello',
      member: 'Members',
    },
    ja: {
      title: 'こんにちは',
      member: 'メンバー',
    },
  },
})

describe('Home vue-test-util', () => {
  it('render', async () => {
    const wrapper = mount(HomePage, {i18n, store, localVue})
    expect(wrapper.vm.member).toBe('')
    const textInput = wrapper.get('input[type="text"]')
    textInput.setValue('Jose')

    const submitButton = wrapper.find('button.create-new-member')
    await submitButton.trigger('click')
    await flushPromises()
    await expect(wrapper.vm.member).toBe('Jose')
  })
})
