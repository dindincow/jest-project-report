import { shallowMount,mount } from '@vue/test-utils'
import Lession1 from '@/views/Chapter3/Lession1.vue'
import Goods from '@/views/Chapter3/components/Goods.vue'


describe('CH-3-Lession1的測試案例', () => {
  const wrapper = mount(Lession1)

  it('法師一定要在畫面上', () => {
    // const wrapper = shallowMount(Lession1)
    const mage = wrapper.find('.mage')
    expect(mage.exists()).toBe(true)
  })

  it('畫面上人物有3個人', () => {
    expect(wrapper.findAll('.img-wrapper').length).toBe(3)
  })

  it('公主的名子要叫 NANA', () => {
    const princessName  = wrapper.findAll('.img-wrapper').at(1).find('.princess-name').text();
    expect(princessName).toMatch('NANA')
  })

  it('公主的名子要叫 NANA', () => {
    const princessName  = wrapper.findAll('.img-wrapper').at(1).find('.princess-name').text();
    expect(princessName).toMatch('NANA')
  })

  it('測試是否有Goods組件', () => {
    expect(wrapper.findComponent(Goods)).toBeTruthy()
  })
})
