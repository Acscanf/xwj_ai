// 枚举类型
const STATUS = {
    // 常量
    READY: Symbol('ready'),
    RUNNING: Symbol('running'),
    DONE: Symbol('done'),
}

let state = STATUS.READY; // 初始状态
if(state === STATUS.READY) { // 开始
    console.log('ready')
} 