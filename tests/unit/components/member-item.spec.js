import {render, screen} from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import MemberItem from '@/components/MemberItem.vue'
import Vuex from 'vuex'

import '@/initializers/vee-validate.js'

describe('App.vue', () => {
  const user = userEvent.setup()
  const props = {
    member: 'Jose',
  }
  // =============== not recommended =============== //
  let actions
  let store
  beforeEach(async () => {
    render(MemberItem, {props}, (vue) => {
      vue.use(Vuex)
      actions = {
        editMember: jest.fn(),
        deleteMember: jest.fn(),
      }
      store = new Vuex.Store({
        actions,
      })
      return {
        store,
      }
    })
  })
  test('display correct value', async () => {
    expect(screen.getByText('Jose')).toBeInTheDocument()
  })
  // =========== test should not be duplicated ================
  test('edit value', async () => {
    expect(screen.getByText('Jose')).toBeInTheDocument()
    const editButton = screen.getByRole('button', {name: 'Edit'})
    await user.click(editButton)
    const editInput = screen.queryByPlaceholderText('Edit the name')
    await user.clear(editInput)
    expect(screen.queryByText('member field is not valid.')).toBeInTheDocument()
  })

  // ========== based on mocking vuex but not recommended ==================
  test('delete value', async () => {
    const deleteButton = screen.getByRole('button', {name: 'Delete'})
    await user.click(deleteButton)
    expect(actions.deleteMember).toHaveBeenCalled()
  })
})
