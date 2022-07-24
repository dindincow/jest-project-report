import Counter from '@/views/Chapter2/Lession3/counter'

let counter = null ;


// 測試案例會互相影響，共用同一實例
beforeAll(()=>{
  console.log('在測試案例執行前調用')
  // counter = new Counter();
})

// 在跑每個測試用例執行前，都會讓先初始化(不共用同一實例)
// 可解決測試函數時，變數的互相影響，讓每個函數都使用新的counter
beforeEach(()=>{
  counter = new Counter();
})

afterEach(()=>{
  
})

afterAll(()=>{
  console.log('等測試案例執行完後調用')
})


describe('add group 測試代碼',()=>{
  test('add 測試案例',()=>{
    counter.addOne();
    expect(counter.number).toBe(1);
  })
  test('add 測試案例',()=>{
    counter.minusOne();
    expect(counter.number).toBe(-1);
  })
})

// describe('minus group 測試代碼',()=>{
//   test('minus 測試案例',()=>{
//     counter.minusOne();
//     expect(counter.number).toBe(-1);
//   })

//   test('minus 測試案例',()=>{
//     counter.minusTow();
//     expect(counter.number).toBe(-2);
//   })
// })

