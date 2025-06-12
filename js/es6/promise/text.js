const fs = require('fs');

fs.readFile('./1.js' , (err , data) => {
    console.log(data.toString()); // 把读取到的内容转成字符串
    td();
})

function td() {
    console.log('111');
}