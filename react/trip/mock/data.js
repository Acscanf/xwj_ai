import Mock from 'mockjs'

export default [
    {
        url: '/api/search',
        method: 'get',
        timeout: 1000,
        response: (req, res) => {
            // ?keyword=绅士玖
            const keyword = req.query.keyword; // 获取关键字
            let num = Math.floor(Math.random() * 10); // 随机生成0-9的数字
            let list = [];
            for (let i = 0; i < num; i++) {
                const randomData = Mock.mock({
                    title: '@ctitle(3, 8)'
                })
                console.log(randomData)
                list.push(`${randomData.title}${keyword}`)
            }
            return {
                code: 0,
                data: list,
            }
        }
    },
    {
        url: '/api/hotlist',
        method: 'get',
        timeout: 1000,
        response: (req, res) => {
            return {
                code: 0,
                data: [{
                    id: '101',
                    city: '上海'
                }, {
                    id: '102',
                    city: '北京'
                }, {
                    id: '103',
                    city: '广州'
                }]
            }
        }
    }
]