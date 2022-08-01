// 引入http模块
const http = require('http')
const { router } = require('./router')
const server = http.createServer((request, response) => {
    // 在这个函数里面处理请求和响应
    // 1.请求
    // 从req拿到请求，可以操作请求
    // console.log(request.url, request.method)
    // 2.响应
    // 从res操作响应, 可以操作响应
    // response.end('hello first server')


    // 获取查询查询参数
    // const queryParams = request.url.split('?')
    // if (queryParams.length <= 1) {
    //     response.end('no query params')
    // } else {
    // ['name=1', 'password=123456']
    // const queryParamsArr = JSON.stringify(queryParams[1].split('&').map((item) => {
    //     const tempKeyVlue = item.split('=') // ['name', '1']
    //     return { [tempKeyVlue[0]]: tempKeyVlue[1] }
    // }))

    //     response.end(queryParams)
    // }

    // 二、后端router
    const urlData = parserUrl(request.url)
    const aimController = router[urlData.path]
    if (aimController) {
        aimController(response, urlData.params)
    } else {
        response.end('no match handle function for this url!')
    }

});

function parserUrl(url) {
    const queryParams = url.split('?')
    let params = null

    if (queryParams.length > 1) {
        params = queryParams[1].split('&').map((item) => {
            const tempKeyVlue = item.split('=') // ['name', '1']
            return { [tempKeyVlue[0]]: tempKeyVlue[1] }
        })
    }
    return {
        path: queryParams[0],
        params,
    }
}

// port, server
server.listen(8080, '127.0.0.1', () => console.log('network http://127.0.0.1:8080'))