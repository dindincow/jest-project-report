import axios from 'axios';

// 寫法1
// export const fetchData = fn => {
//   axios.get('http://www.dell-lee.com/react/api/demo1.json').then( res => {
//     fn(res.data)
//   })
// }

// 寫法2
export const fetchData = async() => {
  const result = await axios.get('http://www.dell-lee.com/react/api/demo.json')
  return result.data
}