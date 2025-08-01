import Mock from 'mockjs'

// 每页10
const getImages = (page , pageSize = 10) => {
    return Array.from({length: pageSize}, (_ , index) => ({
        // 索引唯一
        id: `${page}-${index}`,
        height: Mock.Random.integer(400, 600),
        url: Mock.Random.image('300x400', Mock.Random.color(), '#fff' , 'PDD')
    }))
}

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
    },
    {
        url: '/api/detail/:id',
        method: 'get',
        timeout: 1000,
        response: (req, res) => {
            const randomData = Mock.mock({
                title: '@ctitle(5, 10)',
                price: '@integer(60, 100)',
                desc: '@cparagraph(10,30)',
                images: [
                    {
                        url: 'https://img.36krcdn.com/hsossms/20250729/v2_17dc4793268c46558e68355c5b25a55d@000000@ai_oswg369871oswg1536oswg722_img_000~tplv-1marlgjv7f-ai-v3:600:400:600:400:q70.jpg?x-oss-process=image/format,webp',
                        alt: '@ctitle(5, 10)'
                    },
                    {
                        url: 'https://img.36krcdn.com/hsossms/20250729/v2_17dc4793268c46558e68355c5b25a55d@000000@ai_oswg369871oswg1536oswg722_img_000~tplv-1marlgjv7f-ai-v3:600:400:600:400:q70.jpg?x-oss-process=image/format,webp',
                        alt: '@ctitle(5, 10)'
                    },
                    {
                        url: 'https://img.36krcdn.com/hsossms/20250729/v2_17dc4793268c46558e68355c5b25a55d@000000@ai_oswg369871oswg1536oswg722_img_000~tplv-1marlgjv7f-ai-v3:600:400:600:400:q70.jpg?x-oss-process=image/format,webp',
                        alt: '@ctitle(5, 10)'
                    },
                ]
            })

            return {
                code: 0,
                data: randomData
            }
        }
    },
    {
        // ?page=1  queryString
        url: '/api/images',
        method: 'get',
        response: ({query}) => {
            const page = Number(query.page) || 1; // 获取页码，默认为1
            return {
                code: 0,
                data: getImages(page)
            }
        } 
    }
]