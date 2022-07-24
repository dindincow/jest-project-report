
/** 
 * toBe 是匹配器 matchers
 * object.is ===
 * */   

test('測試10與10匹配',()=>{
  expect(10).toBe(10)
})


/** 
 * toEqual 測試對象內容相等
 * */   

// test('測試對象內容相等',()=>{
//   const a = {one:1};
//   expect(a).toEqual({one:1});
// })


/** 
 * toBeNull 測試物件內容是否為空
 * */   

// test('測試toBeNull',()=>{
//   const a = null;
//   expect(a).toBeNull();
// })


/* =========測試真假相關匹配器 ======== *

//  test('測試toBeUndefined',()=>{
//   const a = undefined ;
//   expect(a).toBeUndefined();
// })

// test('測試toBeDefined',()=>{
//   const a = '' ;
//   expect(a).toBeDefined();
// })

// test('測試toBeTruthy',()=>{
//   const a = 1 ;
//   expect(a).toBeTruthy();
// })

// test('測試toBeFalsy',()=>{
//   const a = 0 ;
//   expect(a).toBeFalsy();
// })

// test('期望a不是falsy',()=>{
//   const a = 1 ;
//   expect(a).not.toBeFalsy();
// })


/* ========= 數字相關的匹配器 ======== */

// test('toBeGreaterThan',()=>{
//   const count = 10 ;
//   expect(count).toBeGreaterThan(9);
// })

// test('toBeLessThan',()=>{
//   const count = 10 ;
//   expect(count).toBeLessThan(11);
// })

// test('toBeGreaterThanOrEqual',()=>{
//   const count = 10 ;
//   // toBeLessThanOrEqual
//   expect(count).toBeGreaterThanOrEqual(10);
// })

// test('toBeCloseTo',()=>{
//   const firstNumber = 0.1;
//   const secondNumber = 0.2;
//   expect(firstNumber+secondNumber).toBeCloseTo(0.3);
// })

/* ========= 字串相關的匹配器 ======== */

// test('toMatch',()=>{
//   const str = "http://dell-lee.com"
//   expect(str).toMatch('lee');
// })


/* ========= Array Set 數組相關的匹配器 ======== */
// test('toContain',()=>{
//   const arr = ['dell','lee','imooc']
//   const data = new Set(arr);
//   expect(data).toContain('lee');
// })


/* ========= 異常的匹配器 ======== */
// const throwNewErrorFunc = () => { 
//   throw new Error('this is a new error')
// }

// test('toThrow',()=>{
//   // toThrow 裡面的錯誤訊息,  必須和你定義的錯誤字串一樣, 才可驗證通過
//   expect(throwNewErrorFunc).toThrow('this is a new error')
// })
