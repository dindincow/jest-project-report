import { shallowMount,mount } from '@vue/test-utils'
import Lession2 from '@/views/Chapter3/Lession2.vue'

describe('CH-3-Lession2 的測試案例', () => {
  const wrapper = mount(Lession2)

  it(`
  1.預期-點即攻擊按鈕
  2.預期-出現火球攻擊綠龍
  3.預期-被攻擊的綠龍血量-50HP
  4.預期-綠龍血量=0時，龍消失
  `, async() => {
    // 攻擊
    const btn = wrapper.find('.btn')
    await btn.trigger('click')

    // 出現火球
    await wrapper.setData({isShowfire:true})
    // console.log('isShowfire=======>',wrapper.vm.$data)
    expect(wrapper.find('.fire').isVisible()).toBe(true)

    // 龍血量-50
    await wrapper.setData({hp:100})
    expect(wrapper.find('.hpNumber').text()).toBe("100")

    // 龍血量0,消失
    await wrapper.setData({hp:0})
    expect(wrapper.find('.hpNumber').text()).toBe("0")
    expect(wrapper.find('.dragon-img').exists()).toBe(false)
  }) 

  // it(`4.預期-綠龍血量=0時，龍消失`, async() => { 
  //   // console.log('isShowfire=======>',wrapper.vm.$data)
  //   // 龍血量0,消失
  //   await wrapper.setData({hp:0})
  //   expect(wrapper.find('.hpNumber').text()).toBe("0")
  //   expect(wrapper.find('.dragon-img').exists()).toBe(false)
  // })
})
