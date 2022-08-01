// 引入http模块
const http = require('http')

const server = http.createServer((request, response) => {
    // 在这个函数里面处理请求和响应
    // 1.请求
    // 从req拿到请求，可以操作请求
    // 2.响应
    // 从res操作响应, 可以操作响应
    response.end('hello first server')
});

// port, server
server.listen(8080, '10.3.25.73', () => console.log('network http://10.3.25.73:8080'))