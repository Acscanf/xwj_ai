// console.log('智能前端，智能后端，笑傲秋招')

const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit' , async (e) => {
    e.preventDefault(); // 阻止表单默认提交行为
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    // console.log(username, password);
    try {
        const response = await fetch('/login' , {
            method: 'POST', // 请求方法
            headers: { // 请求头
                'Content-Type': 'application/json' // 告诉服务器，我发送的数据是json格式的
            },
            body: JSON.stringify({ // 请求体
                username, // 用户名
                password // 密码
            })
        })
        const data = await response.json(); // 解析响应数据
        console.log(data);
    } catch (err) {
        console.log("登录出错了")
    }
})

document.addEventListener('DOMContentLoaded' , async () => {
    // 登录了么？
    try {
        const response = await fetch('/check-login')
        const data = await response.json();
        // console.log(data);
        if(data.loginIn) {
            document.querySelector('#loginSection').style.display = 'none'; // 隐藏登录表单
            document.querySelector('#welcomeSection').style.display = 'block'; // 显示欢迎信息
            document.querySelector('#userDisplay').innerText = data.username; // 显示用户名
        } else {
            document.querySelector('#loginSection').style.display = 'block'; // 显示登录表单
            document.querySelector('#welcomeSection').style.display = 'none'; // 隐藏欢迎信息
        }

    } catch (err) {
        console.log("检查登录出错了")
    }
})