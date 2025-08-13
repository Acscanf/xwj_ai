// 有两个容器，盒子A 放油钥匙，钱包
// 盒子B 放有手机，充电宝

const target = {a: 1};
const source = {b: 2};

const result = Object.assign(target, source);
console.log(target, result);
target.a = 2;
console.log(target, result);