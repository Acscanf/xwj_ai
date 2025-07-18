// {} key: value  O(1)  HashMap  Map
// 第一种重要数据结构
// 第二种重要数据结构 链表、队列、栈
// 其他语言数组长度固定、类型固定，js数组长度不固定、类型不固定
// 可以动态扩容
const arr = [1 , 2 , 3];
const arr2 = new Array(5).fill(undefined)
console.log(arr2)
arr2[8] = undefined
console.log(arr2)
for(let key in arr2) {
  console.log(key , arr2[key])
}
for(let key of arr2) {
    console.log(key)
}
