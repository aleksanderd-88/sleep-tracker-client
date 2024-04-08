import { DOMWrapper, VueWrapper, shallowMount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'

import TheLoginForm from '@/modules/form/TheLoginForm.vue'

describe('TheLoginForm.vue', () => {
  let wrapper: VueWrapper
  let form: DOMWrapper<Element>
  let emailInput: DOMWrapper<Element>
  let passwordInput: DOMWrapper<Element>

  beforeEach(() => {
    wrapper = shallowMount(TheLoginForm)
    form = wrapper.find('[data-test="login-form"]')
    emailInput = wrapper.find('[data-test="email-input"]')
    passwordInput = wrapper.find('[data-test="password-input"]')
  })

  const emailValue = 'abc@abc.com'
  const passwordValue = 'abc1234_'

  it('Should check if component exist', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('Should return input value being set', async () => {
    await emailInput.setValue(emailValue)
    await passwordInput.setValue(passwordValue)

    expect((emailInput.element as HTMLInputElement).value).toBe(emailValue)
    expect((passwordInput.element as HTMLInputElement).value).toBe(passwordValue)
  })

  it('Should check if form is sending an emitted event if all fields are set', async () => {
    await emailInput.setValue(emailValue)
    await passwordInput.setValue(passwordValue)

    await form.trigger('submit.prevent')
    expect(wrapper.emitted()).toHaveProperty('on-submit')
  })

  it('Should check if emitted event includes payload', async () => {
    emailInput.setValue(emailValue)
    passwordInput.setValue(passwordValue)

    await form.trigger('submit.prevent')

    expect(wrapper.emitted('on-submit')![0][0]).toStrictEqual({
      email: emailValue,
      password: passwordValue
    })
  })
})
