import { expect  } from 'chai'
import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import Button from '../../src/components/button/Button.vue'

describe('Button.vue', () => {
  it('可以设置icon', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'setting'
      }
    })
    const useElement = wrapper.find('use')
    expect(useElement).to.be.exist
    expect(useElement.attributes().href).to.eq('#icon-setting')
  })
  
})