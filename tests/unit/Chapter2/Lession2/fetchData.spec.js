import { fetchData } from '@/views/Chapter2/Lession2/fetchData' 

/** ================== 測試 fetchData 2種寫法 =================**/

// 寫法一 回調類型異步測試 成功和失敗
/**
 *  當異步函數接收 callback function 時，需增加done 告訴程式，需要跑完  callback function 內容才算結束
 *  如果沒加 done()，是不會跑 expect(data).toEqual({"success":true}) 這句的
 */
// test('測試 fetchData 返回結果 為{"success":true} ',(done)=>{
//   fetchData(data=>{
//     expect(data).toEqual({"success":true})
//     done()
//   }) 
// })

// test(' 測試 fetchData 返回結果 404 ',async()=>{
//   expect.assertions(1) // 一定要執行一次測試
//   return fetchData().catch(e => {
//     expect(e.toString().indexOf('404') > -1).toBe(true)
//   })
// })


// 寫法二 一般的請求 成功和失敗(推薦)
test(' 測試 fetchData 返回結果 為{"success":true} ',async()=>{
  const result = await fetchData()
  expect(result).toEqual({"success":true})
})

// test(' 測試 fetchData 返回結果 404 ',async()=>{
//   expect.assertions(1)
//   try{
//     // 這邊有個坑，如果能正常取到數據， catch 不會執行
//     await fetchData()
//   }catch(e){
//     expect(e.toString().indexOf('404') > -1).toBe(true)
//   }
// })