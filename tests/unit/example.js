import {shallowMount} from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'
import {render, fireEvent, screen} from '@testing-library/vue'

describe.skip('HelloWorld.vue', () => {
  // it('renders props.msg when passed', () => {
  //   const msg = 'new message'
  //   const wrapper = shallowMount(HelloWorld, {
  //     propsData: { msg }
  //   })
  //   expect(wrapper.text()).toMatch(msg)
  // })
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    render(HelloWorld, {
      propsData: {msg},
    })
    // const wrapper = shallowMount(HelloWorld, {
    //   propsData: { msg }
    // })
    // expect().toMatch(msg)
    expect(screen.getByText(msg)).toBeInTheDocument()
  })
})
