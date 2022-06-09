import {render, screen} from '@testing-library/vue'
import BaseInput from '@/components/base/BaseInput.vue'

import '@/initializers/vee-validate.js'

describe('App.vue', () => {
  const props = {
    value: 'test',
    placeholder: 'Enter something',
    name: 'textbox',
  }
  beforeEach(async () => {
    render(BaseInput, {props})
  })
  test('input recieves correct value and placeholder', async () => {
    expect(screen.getByPlaceholderText('Enter something')).toHaveValue(props.value)
  })
})
