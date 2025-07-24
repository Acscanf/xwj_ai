import jwt from 'jsonwebtoken';

// 安全性  编码的时候加密
// 解码的时候用于解密
// 加盐
const secret = '**&……￥……#&*12423afa' // 密钥
// login 模块 mock 
export default [
    {
        url: '/api/login',
        method: 'post',
        timeout: 2000, // 请求耗时
        response: (req, res) => {
            // req, username, password
            const {username, password} = req.body;
            if (username !== 'admin' || password !== '123456') {
                // return res.status(401).send({code: 401, message: '用户名或密码错误'})
                return {
                    code: 1,
                    message: '用户名或密码错误'
                }
            }
            // 生成token 颁发令牌
            // json 用户数据对象
            const token = jwt.sign({
                user: {
                    id: '001',
                    username: 'admin'
                }
            }, 
            secret , // 密钥
            {
                expiresIn: '1h' // 过期时间
            })
            console.log(token , '---------'); // 打印token
            return {
                token,
                data: {
                    id: '001',
                    username: 'admin'
                }
            }
        }
    },
    {
        url: '/api/user',
        method: 'get',
        response: (req, res) => {
            // 用户端 token headers
            const token = req.headers["authorization"].split(' ')[1]; // 从请求头中获取token
            console.log(token);
            try {
                const decode = jwt.decode(token, secret) // 解码
                console.log(decode, 'decode');
                return {
                    code: 0,
                    message: 'success',
                    data: decode.user
                }
            } catch(err) {
                return {
                    code: 1, 
                    message: 'token 错误'
                }
            }
            return {
                token
            }
        }
    }
]