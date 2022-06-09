import {render, screen} from '@testing-library/vue'
import store from '@/store'
import userEvent from '@testing-library/user-event'
import HomePage from '@/page/HomePage.vue'
import VueI18n from 'vue-i18n'

import '@/initializers/vee-validate.js'

describe('HomePage.vue', () => {
  const user = userEvent.setup()

  beforeEach(async () => {
    render(HomePage, {store, stubs: ['router-link']}, (vue) => {
      vue.use(VueI18n)
      const i18n = new VueI18n({
        locale: 'en',
        fallbackLocale: 'en',
        // this is supposed to be done with dynamic import
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
      return {
        i18n,
      }
    })
  })
  test('change locale', async () => {
    // check locale is english
    expect(screen.getByRole('option', {name: 'en'}).selected).toBe(true)
    expect(screen.queryByText('Members')).toBeInTheDocument()

    // change locale to Japanese
    await user.selectOptions(screen.getByRole('combobox'), ['ja'])

    // check if it changes title in Japanese
    expect(screen.getByRole('option', {name: 'ja'}).selected).toBe(true)
    expect(screen.queryByText('メンバー')).toBeInTheDocument()
  })

  test('error when submit button is clicked without filling input for member creation', async () => {
    const submitButton = screen.getByRole('button', {name: 'Create new member'})
    await user.click(submitButton)
    expect(screen.queryByText('member is not valid.')).toBeInTheDocument()
  })
  test('create new member', async () => {
    // type name to input
    const input = screen.getByRole('textbox')
    await user.type(input, 'Jose')
    // submit button
    const submitButton = screen.getByRole('button', {name: 'Create new member'})
    await user.click(submitButton)

    // check if user is created and buttons are showing
    expect(screen.queryByText('Jose')).toBeInTheDocument()
    expect(screen.getByRole('button', {name: 'Edit'}))
    expect(screen.getByRole('button', {name: 'Delete'}))
  })

  test('render error when clear editted input', async () => {
    const editButton = screen.getByRole('button', {name: 'Edit'})
    await user.click(editButton)
    const editInput = screen.queryByPlaceholderText('Edit the name')
    await user.clear(editInput)
    expect(screen.queryByText('member field is not valid.')).toBeInTheDocument()
  })

  test('edit and delete a member', async () => {
    const editButton = screen.getByRole('button', {name: 'Edit'})
    const deleteButton = screen.getByRole('button', {name: 'Delete'})

    // click edit button
    await user.click(editButton)
    const editInput = screen.queryByPlaceholderText('Edit the name')

    // edit button disappear and appear input
    expect(screen.queryByRole('button', {name: 'Edit'})).not.toBeInTheDocument()
    expect(editInput).toBeInTheDocument()

    user.clear(editInput)
    await user.type(editInput, 'Anita')

    const saveButton = screen.getByRole('button', {name: 'Save'})
    await user.click(saveButton)

    // different user name
    expect(screen.queryByText('Jose')).not.toBeInTheDocument()
    expect(screen.queryByText('Anita')).toBeInTheDocument()

    await user.click(deleteButton)
    expect(screen.queryByText('Anita')).not.toBeInTheDocument()
  })
})
