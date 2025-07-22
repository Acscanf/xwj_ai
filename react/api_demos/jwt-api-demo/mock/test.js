export default [
    {
        url: '/api/todos',
        method: 'get',
        response: () => {
            const todos = [
                {
                    id: 1,
                    title: 'todos1',
                    completed: false,
                },
                {
                    id: 2,
                    title: 'todos2',
                    completed: true,
                },
                {
                    id: 3,
                    title: 'todos3',
                    completed: false,
                },
            ]
            return {
                code: 0,  // 没有错误
                message: 'succcess',
                data: todos,
            }
        }
    },
    {
        url: '/repos',
        method: 'get',
        response: () => {
            const repos = [
                {
                    id: 1,
                    name: 'todos1',
                    completed: false,
                },
                {
                    id: 2,
                    name: 'todos2',
                    completed: true,
                },
                {
                    id: 3,
                    name: 'todos3',
                    completed: false,
                },
            ]
            return {
                code: 0,  // 没有错误
                message: 'succcess',
                data: repos,
            }
        }
    }
]