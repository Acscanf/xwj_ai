const s = Symbol('id');
const source = {
    [s]: 123,
    a: 1
}

const target = [];
Object.assign(target, source);

console.log(target)