import React from "react"
import Form from "./commponents/Form"

// react 组件
// 组件名 必须首字母大写
// 1. 函数式组件(无状态组件  没有 state)  直接写一个函数 函数名首字母大写 该函数必须返回标签   并且默认导出该函数
// 2. react 组件 是使用 class 创建

// jsx 语法内 需要注意
// 1. class 名  className='xxxx'      label 的 for 写成  htmlFor
// 2. 标签内的属性使用 js 的话   例如   src={logo}    在标签之间写 js 使用 {}  例如  <span>{a}</span>
function App() {
  // 把运算的逻辑都写在 return 之外
  return (
    <div className='App'>
      <h1>react from 受控组件</h1>
      <Form />
    </div>
  )
}
export default App