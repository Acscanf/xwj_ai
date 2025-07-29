import './App.css'
import HelloComponent from './components/HelloComponent.tsx'
// react + typescript
// javascript 可能会有些问题，主要是因为弱类型
// jsx 后缀改成 tsx
// // 函数进行类型约束
// const HelloComponent = () => {
//   // void 空 ReactNode
//   return 1
// }

function App() {
  // 编译阶段
  // 多写了些类型申明文件
  // 多写了一些代码，主要是一些类型申明 代码质量保驾护航
  let count:number = 10;
  const title:string = "Hello ts"
  const isDone:boolean = true;
  const list:number[] = [1, 2, 3]
  // 元祖类型
  const tuple:[string, number] = ['hello', 10]
  enum status {
    Pending,
    Fullfilled,
    Rejected
  }
  const pStatus: status = status.Pending
  // 对象的约束？
  // 接口类  都要用;来结尾
  interface User {
    name: string;
    age: number;
    isSing?: boolean;
  }
  // 使用接口interface 来约定类型
  const user: User = {
    name: '小明',
    age: 18
  }
  return (
    <>
      {count}
      {title}
      {user.name} {user.age}
      {/* typescript 很严格 */}
      {isDone}{list}{tuple}{pStatus}
      <HelloComponent name="小明"/>
    </>
  )
}

export default App
