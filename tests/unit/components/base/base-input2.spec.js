import {render, screen, waitFor} from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import BaseInput from '@/components/base/BaseInput.vue'

import '@/initializers/vee-validate.js'

const component = {
  components: {BaseInput},
  template: `
    <div>
        <h1>title</h1>
        <BaseInput
            v-model="value"
            name="text input"
            placeholder="Enter something"
            @updateValue="updateInputValue"
        />
    </div>
    `,
  data() {
    return {
      value: '',
    }
  },
  methods: {
    updateInputValue(e) {
      this.value = e
    },
  },
}
describe('App.vue', () => {
  const user = userEvent.setup()
  beforeEach(async () => {
    render(component)
  })
  test('render error', async () => {
    const input = screen.getByRole('textbox')
    // imitating blur event
    await user.click(input)
    await user.click(screen.getByText('title'))

    await waitFor(() => expect(screen.queryByText(`text input is not valid.`)).toBeInTheDocument())
  })
})
