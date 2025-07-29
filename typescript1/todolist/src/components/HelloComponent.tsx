import React from 'react'
// 如何约束函数的返回值为ReactNode? JSX
// FC === FunctionComponent 函数组件
// 如何约定字节需需要一个name的prop？
interface Props {
    name?: string;
}
// typescript 类型约束，重要的地方一定要约束
// 参数，返回值
// 泛型 泛指内部的类型
const HelloComponent:React.FC<Props> = (props) => {
    return (
        <h2>Hello user: {props.name}</h2>
    )
}

export default HelloComponent